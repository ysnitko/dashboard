import Header from '@/components/Header/Header';
import Table from '@/components/Table/Table';
import { prisma } from './lib/prisma';

export default async function Home() {
  const users: {
    id: number;
    name: string;
    email: string;
    userStatus: string;
    createdAt: Date;
    paymentStatus: string;
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

  return (
    <>
      <Header />
      <Table users={users} />
    </>
  );
}
