'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ChangeEvent, useState } from 'react';

export default function Projects() {
  const router = useRouter();
  const [selectedOption, setselectedOption] = useState('all-users');

  const handleSelectAll = (event: ChangeEvent<HTMLSelectElement>) => {
    setselectedOption(event.target.value);
  };

  return (
    <div className="p-[30px] pt-3 flex flex-col gap-5">
      <button
        className="max-w-5  text-sm flex gap-1"
        type="button"
        onClick={() => router.back()}
      >
        <Image src="/assets/back.svg" alt="back" width={40} height={40} />
        <span>Back</span>
      </button>
      <div>
        <select
          name="select-user"
          id="select-user"
          className="bg-bg-page text-sm text-clr-text-table font-semibold"
          onChange={handleSelectAll}
          defaultValue={selectedOption}
        >
          <option value="all-users">All Users</option>
          <option value="Adam">Adam</option>
          <option value="Tom">Tom</option>
        </select>
      </div>
      <div>
        <div className="flex justify-between">
          <div
            className={
              selectedOption === 'all-users' ? 'invisible flex' : 'flex'
            }
          >
            <Image
              src="/assets/avatar.svg"
              alt="avatar"
              width={100}
              height={100}
            />
            <div className="flex flex-col">
              <span className="font-bold">Name User</span>
              <span>id: 12343</span>
            </div>
          </div>
          <div className="flex gap-5 text-sm">
            <section className="flex flex-col justify-between p-3 bg-bg-section rounded-md">
              <h2 className="font-bold text-sm">Balance</h2>
              <div className="flex flex-row">
                <div className="pr-3 border-r-[1px] border-clr-text-table flex flex-col gap-1">
                  <p className="font-bold">$ 12.542</p>
                  <p className="text-xs text-clr-text-table">
                    Advanced Balance
                  </p>
                </div>
                <div className="pl-3 flex flex-col gap-1">
                  <p className="font-bold text-sm">$ 48.451</p>
                  <p className="text-xs text-clr-text-table">
                    Outstand Balance
                  </p>
                </div>
              </div>
            </section>
            <section className="flex flex-col justify-between p-3  bg-bg-section">
              <h2 className="font-bold text-sm">Advances</h2>
              <div className="flex flex-col gap-1">
                <p className="font-bold text-sm">146</p>
                <p className="text-xs text-clr-text-table">Pending Advances</p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div>
        <div className="flex gap-4 mt-3">
          <button className="border-clr-text-table rounded-md border-[1px] text-sm px-4 py-1 text-clr-text-table font-semibold ">
            All (10)
          </button>
          <button className="border-clr-text-table rounded-md border-[1px] text-sm px-4 py-1 text-clr-text-table font-semibold">
            Active (5)
          </button>
          <button className="border-clr-text-table rounded-md border-[1px] text-sm px-4 py-1 text-clr-text-table font-semibold">
            Closed (1)
          </button>
          <button className="border-clr-text-table rounded-md border-[1px] text-sm px-4 py-1 text-clr-text-table font-semibold">
            Completed (4)
          </button>
        </div>
      </div>
      <table className="w-full border-bg-leftmenu border-separate border-spacing-y-2 ">
        <thead className="font-bold text-base text-clr-text-table">
          <tr>
            <td>Name</td>
            <td>Login</td>
            <td>Password</td>
            <td>Created at</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody className="text-sm font-semibold">
          <tr className="bg-bg-section ">
            <td className="flex gap-1 p-3 px-2">
              <Image
                src="/assets/avatar.svg"
                alt="users icon"
                width={20}
                height={20}
              />
              <span>user?.nam</span>
            </td>
            <td className="p-2">user?.login</td>
            <td className="p-2">user?.password</td>
            <td className="p-2">modifyStringDate</td>
            <td className="p-2">
              <span>user?.role</span>
            </td>
            <td className="p-2">
              <span>user?.status</span>
            </td>
            <td className="p-2 w-[150px]"></td>
          </tr>
          <tr className="bg-bg-section ">
            <td className="flex gap-1 p-3 px-2">
              <Image
                src="/assets/avatar.svg"
                alt="users icon"
                width={20}
                height={20}
              />
              <span>user?.nam</span>
            </td>
            <td className="p-2">user?.login</td>
            <td className="p-2">user?.password</td>
            <td className="p-2">modifyStringDate</td>
            <td className="p-2">
              <span>user?.role</span>
            </td>
            <td className="p-2">
              <span>user?.status</span>
            </td>
            <td className="p-2 w-[150px]"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
