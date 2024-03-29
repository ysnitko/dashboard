import { prisma } from '@/app/lib/prisma';
import { AuthOptions } from 'next-auth';
import * as bcrypt from 'bcrypt';

import CredentialsProvider from 'next-auth/providers/credentials';
import NextAuth from 'next-auth/next';

interface User {
  id: string;
  name: string | null;
  email: string | null;
  userStatus: string;
  createdAt: Date;
  paymentStatus: string;
  amount: number;
}

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: {
          label: 'Email',
          type: 'text',
          placeholder: 'Your username',
        },
        password: {
          label: 'Password',
          type: 'password',
        },
      },
      async authorize(credentials) {
        const user = await prisma.users.findUnique({
          where: {
            email: credentials?.username,
          },
        });
        if (!user) throw new Error('Email or password is incorrect');

        if (!credentials?.password)
          throw new Error('Please provide your password');
        const isPasswordCorrect = await bcrypt.compare(
          credentials.password,
          user.password as string
        );
        if (!isPasswordCorrect)
          throw new Error('Email or password is incorrect');
        const { password, ...userWithoutPass } = user;
        return {
          ...userWithoutPass,
          id: userWithoutPass.id.toString(),
        } as User | null;
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
