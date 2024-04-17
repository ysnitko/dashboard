import { prisma } from '@/app/lib/prisma';
import { AuthOptions } from 'next-auth';
import { userCreateLog } from '@/app/lib/actions';
import CredentialsProvider from 'next-auth/providers/credentials';

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
        const user: User | null = await prisma.users.findUnique({
          where: {
            email: credentials?.email,
          },
        });
        if (user && user.password === credentials?.password) {
          await userCreateLog(user.id, 'login');
          const { password, ...userWithoutPassword } = user;
          return { ...(userWithoutPassword as User), id: user.id.toString() };
        }
        return null;
      },
    }),
  ],

  pages: {
    signIn: '/signin',
    signOut: '/',
  },
  secret: process.env.NEXTAUTH_SECRET,
};
