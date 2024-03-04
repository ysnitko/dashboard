import Link from 'next/link';

import Image from 'next/image';
import { Dispatch, SetStateAction, useRef, useState, useEffect } from 'react';
import { listenForOutsideClicks } from '../listenForOutsideClicks/listenForOutsideClicks';
import { deleteUser } from '@/app/lib/actions';

export default function UserMenu({
  setOpen,
  rowId,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
  rowId: number;
}) {
  const [listening, setListening] = useState<boolean>(false);
  const menuRef = useRef(null);

  useEffect(listenForOutsideClicks(listening, setListening, menuRef, setOpen));

  return (
    <form onSubmit={() => deleteUser(rowId)}>
      <ul
        ref={menuRef}
        className="absolute top-0 -left-[25px] p-2 bg-bg-table-primary border-[1px] rounded-md  text-sm tracking-widest w-[150px] flex flex-col gap-2 z-10 [&_li:hover]:bg-bg-color"
      >
        <button
          className="absolute -right-[10px] -top-[10px] p-1 rounded-full border-[1px] bg-bg-table-primary"
          onClick={() => setOpen(false)}
        >
          <Image src="/assets/Close.svg" width={8} height={8} alt="close" />
        </button>

        <li className="p-1 rounded-[4px]">
          <Link href={'/'}>Edit</Link>
        </li>

        <li className="p-1 rounded-[4px]">
          <Link href={'/'}>View Profile</Link>
        </li>
        <li className="p-1 rounded-[4px]">
          <button className="text-left text-clr-paid-status">
            Activate User
          </button>
        </li>
        <li className="border-t-[1px] p-1 rounded-[4px]">
          <button
            className="text-left text-clr-overdue-status"
            onClick={async () => await deleteUser(+rowId)}
          >
            Delete User
          </button>
        </li>
      </ul>
    </form>
  );
}
