import Header from '@/components/Header/Header';
import Table from '@/components/Table/Table';
import { prisma } from '../lib/prisma';
import Loading from '@/components/Loading/Loading';
export const revalidate = 0;
export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

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

  return (
    <>
      {users ? (
        <>
          <Header />
          <Table users={users} />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}
