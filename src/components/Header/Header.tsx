'use client';
import Image from 'next/image';
import { SetStateAction, useState } from 'react';
import CreateUser from '../CreateUser/CreateUser';
import { useSession, signOut } from 'next-auth/react';

export default function Header({
  users,
}: {
  users: {
    id: number;
    name: string | null;
    email: string | null | undefined;
    userStatus: string;
    createdAt: Date;
    paymentStatus: string;
    amount: number;
    subRows: any[];
  }[];
}) {
  const [createUser, setCreateUser] = useState<SetStateAction<boolean>>(false);
  const { data: session } = useSession();

  return (
    <header className="flex gap-3 items-center  justify-between">
      <div className="flex">
        <h1 className=" text-sm font-bold tracking-widest py-3 pr-1 text-text-header">
          TABLE HEADING
        </h1>
        <div className="flex gap-2 pl-2 items-center">
          <button
            className="flex gap-2 p-1 text-text-btn-filter text-sm border-[1px] rounded-full"
            onClick={() => setCreateUser(true)}
          >
            <Image
              src={'/assets/plus.svg'}
              alt="create"
              width={15}
              height={15}
              className="rounded-full bg-white"
            />
          </button>
          <span className="text-text-btn-filter text-sm">Create user</span>
        </div>
      </div>

      <div className="flex gap-1 items-center">
        <Image src="/assets/avatar.svg" width={20} height={20} alt="avatar" />
        <span className="text-text-btn-filter text-sm">
          {session?.user?.name}
        </span>
        {session?.user && (
          <button onClick={() => signOut({ callbackUrl: '/' })}>
            {/* <button onClick={handleSignOut}> */}
            <Image
              src="/assets/log-out.svg"
              width={20}
              height={20}
              alt="signout"
            />
          </button>
        )}
      </div>

      {createUser && <CreateUser setCreateUser={setCreateUser} />}
    </header>
  );
}
