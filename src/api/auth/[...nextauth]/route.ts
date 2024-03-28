import { prisma } from '@/app/lib/prisma';
import { AuthOptions } from 'next-auth';

import CredentialsProvider from 'next-auth/providers/credentials';
import NextAuth from 'next-auth/next';

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        userName: {
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
            email: credentials?.userName as string,
          },
        });
        if (!user) throw new Error('Email or password is incorrect');

        if (!credentials?.password)
          throw new Error('Please provide your password');
        const isPasswordCorrect = credentials?.password === user.password;

        if (!isPasswordCorrect)
          throw new Error('Email or password is incorrect');
        const { password, ...userWithoutPass } = user;
        return userWithoutPass;
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
