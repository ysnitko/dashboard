'use client';
import Image from 'next/image';
import { SetStateAction, useState } from 'react';
import CreateUser from '../CreateUser/CreateUser';

import { useSession, signOut, signIn } from 'next-auth/react';

export default function Header() {
  const [createUser, setCreateUser] = useState<SetStateAction<boolean>>(false);

  const { data: session } = useSession();

  return (
    <header className="flex gap-3 items-center">
      <h1 className=" text-sm font-bold tracking-widest py-3 text-text-header">
        TABLE HEADING
      </h1>
      <div className="flex gap-2 border-l-2 pl-2 items-center">
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
      <span className="">{session?.user?.name}</span>
      {session?.user ? (
        <button onClick={() => signOut({ callbackUrl: '/' })}>SIGN OUT</button>
      ) : (
        <button onClick={() => signIn()}>SIGN IN</button>
      )}

      {createUser && <CreateUser setCreateUser={setCreateUser} />}
    </header>
  );
}
