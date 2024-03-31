import Header from '@/components/Header/Header';
import Table from '@/components/Table/Table';
import { prisma } from './lib/prisma';
import { getServerSession } from 'next-auth';

export default async function Home() {
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
  const session = await getServerSession();
  console.log(session);

  return (
    <>
      <Header />
      <Table users={users} />
    </>
  );
}
