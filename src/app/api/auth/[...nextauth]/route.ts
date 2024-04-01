import { prisma } from '@/app/lib/prisma';
import { AuthOptions } from 'next-auth';
import { userCreateLog } from '@/app/lib/actions';
import * as bcrypt from 'bcrypt';

import CredentialsProvider from 'next-auth/providers/credentials';
import NextAuth from 'next-auth/next';

interface User {
  id: number;
  name: string | null;
  email: string | null;
  userStatus: string;
  createdAt: Date;
  password: string | null;
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

        const user: User | null = await prisma.users.findUnique({
          where: {
            email: credentials?.email,
          },
        });

        console.log(user?.name);

        if (user) {
          await userCreateLog(user.id, 'login');
          return { ...user, id: user.id.toString() };
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: '/signin',
    signOut: '/',
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
