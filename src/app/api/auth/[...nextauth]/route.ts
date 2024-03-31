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
  session: {
    strategy: 'jwt',
  },

  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'Your username',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Your password',
        },
      },
      async authorize(credentials) {
        console.log(credentials);

        const user = await prisma.users.findUnique({
          where: {
            email: credentials?.email,
          },
        });

        console.log(user);

        if (!user) throw new Error('Email or password is incorrect');

        if (!credentials?.password)
          throw new Error('Please provide your password');
        const isPasswordCorrect = credentials?.password === user.password;
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
  pages: {
    signIn: '/signin',
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
