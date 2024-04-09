import Header from '@/components/Header/Header';
import Table from '@/components/Table/Table';
import { prisma } from '../lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

export default async function UsersField() {
  const users: {
    id: number;
    name: string | null;
    email: string | null;
    userStatus: string;
    createdAt: Date;
    paymentStatus: string;
    password: string | null;
    amount: number;
    subRows: {
      id: number;
      date: Date;
      userActivity: string;
      details: string;
      usersId: number | null;
    }[];
  }[] = await prisma.users.findMany({
    include: {
      subRows: true,
    },
  });

  const session = await getServerSession(authOptions);

  return (
    <>
      {session ? (
        <>
          <Header users={users} />
          <Table users={users} />
        </>
      ) : (
        redirect('/')
      )}
    </>
  );
}
