'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Dispatch, SetStateAction, useRef, useState, useEffect } from 'react';
import { listenForOutsideClicks } from '../listenForOutsideClicks/listenForOutsideClicks';
import { deleteUser, userActivate, findUser } from '@/app/lib/actions';
import UpdateUser from '../UpdateUser/UpdateUser';

export default function UserMenu({
  setOpen,
  rowId,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
  rowId: number;
}) {
  const [listening, setListening] = useState<boolean>(false);
  const [updateUser, setUpdateUser] = useState<boolean>(false);
  const [user, setUser] = useState<any>({});
  const menuRef = useRef(null);

  useEffect(listenForOutsideClicks(listening, setListening, menuRef, setOpen));

  useEffect(() => {
    const fetchData = async () => {
      const data = await findUser(+rowId);
      setUser(data);
    };
    fetchData();
  }, [rowId]);

  return (
    <ul
      ref={menuRef}
      className="absolute top-0 -left-[25px] p-2 bg-bg-table-primary border-[1px] rounded-md  text-sm tracking-widest w-[150px] flex flex-col gap-2 z-10 [&_li:hover]:bg-bg-color
      shadow-2xl"
    >
      <button
        className="absolute -right-[10px] -top-[10px] p-1 rounded-full border-[1px] bg-bg-table-primary"
        onClick={() => setOpen(false)}
      >
        <Image src="/assets/Close.svg" width={8} height={8} alt="close" />
      </button>

      <li className="p-1 rounded-[4px]">
        <button
          className=" w-full text-left"
          onClick={() => setUpdateUser(true)}
        >
          Edit
        </button>
      </li>

      <li className="p-1 rounded-[4px]">
        <Link href={'/'}>View Profile</Link>
      </li>
      <li className="p-1 rounded-[4px]">
        <button
          className={`text-left text-clr-paid-status ${
            user?.userStatus === 'Active' ? 'opacity-50' : ''
          }`}
          onClick={() => userActivate(rowId)}
          disabled={user?.userStatus === 'Active'}
        >
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
      {updateUser && (
        <UpdateUser
          setUpdateUser={setUpdateUser}
          id={rowId.toString()}
          user={user}
        />
      )}
    </ul>
  );
}
