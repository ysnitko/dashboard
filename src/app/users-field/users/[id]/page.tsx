import { prisma } from '@/app/lib/prisma';
import Image from 'next/image';
import Link from 'next/link';
import SubRowsTable from '@/components/SubRowsTable/SubRowsTable';

export default async function User({ params }: { params: { id: string } }) {
  const id = +params.id;
  const data = await prisma.users.findUnique({
    where: {
      id,
    },
  });

  const subRowsData = await prisma.subRows.findMany();

  return (
    <div className="max-sm:p-2">
      <header className="flex flex-col gap-4">
        <h1 className="text-text-header font-bold text-xl border-b-2  pt-4">
          User profile
        </h1>
        <Link
          href={{ pathname: '/users-field' }}
          className="text-text-btn-filter flex"
        >
          <Image src={'/assets/back.svg'} alt="back" width={20} height={20} />
          Back
        </Link>
      </header>
      <div className="flex mt-10 gap-5 mb-5 max-sm:gap-3">
        <Image
          className="w-[250px] border-[2px] border-border-clr"
          src={'/assets/avatar.svg'}
          alt="avatar"
          height={300}
          width={250}
        />
        <ul className="flex flex-col [&_li]:text-base  py-1 text-text-btn-filter font-bold gap-5 max-sm:gap-3">
          <li>
            Name: <span className="font-medium">{data?.name}</span>
          </li>
          <li>
            Email: <span className="font-medium">{data?.email}</span>
          </li>
          <li>
            Phone: <span className="font-medium">+37534234354</span>
          </li>
          <li>
            Status:&nbsp;
            <span
              className={`font-medium ${
                data?.userStatus === 'Active'
                  ? 'text-clr-active-status'
                  : 'text-clr-overdue-status'
              }`}
            >
              {data?.userStatus}
            </span>
          </li>
        </ul>
      </div>
      <SubRowsTable subRowsData={subRowsData} id={id} />
    </div>
  );
}
