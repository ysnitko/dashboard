import Image from 'next/image';
import { prisma } from '../lib/prisma';
import Link from 'next/link';

export default async function Users() {
  const users = await prisma.users.findMany();

  return (
    <div className="p-[30px] flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <input
          type="search"
          className="rounded-md p-1 pl-2 text-sm outline-none"
          placeholder="Search for a user..."
        />
        <Link
          className="text-sm bg-bg-active-btn rounded-md text-clr-text-menu font-bold px-2 py-1"
          href="/create-user"
        >
          Add new
        </Link>
      </div>
      <table className="w-full border-bg-leftmenu border-collapse">
        <thead className="font-bold text-base text-clr-text-table ">
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
          {users.map((user, index) => {
            const modifyStringDate = user.createdAt
              .toString()
              .substring(0, user.createdAt.toString().indexOf('GMT'));
            console.log(modifyStringDate);

            return (
              <tr key={user?.id}>
                <td className="flex gap-1 p-3 px-0">
                  <Image
                    src="/assets/avatar.svg"
                    alt="users icon"
                    width={20}
                    height={20}
                  />
                  <span>{user?.name}</span>
                </td>
                <td className="p-2">{user?.login}</td>
                <td className="p-2">{user?.password}</td>
                <td className="p-2">{modifyStringDate}</td>
                <td className="p-2">
                  <span>{user?.role}</span>
                </td>
                <td className="p-2">
                  <span> {user?.status}</span>
                </td>
                <td className="p-2">
                  <button className="mr-2 bg-bg-btn-block px-[1.06rem] py-1 rounded-md text-sm text-clr-text-menu font-semibold">
                    Block
                  </button>
                  {/*              
                    <button className="mr-2 bg-clr-status-active px-2 py-1 rounded-md text-sm text-clr-text-menu font-semibold">
                      Unblock
                    </button> */}

                  <button
                    className="bg-bg-btn-delete px-2 py-1 rounded-md text-sm text-clr-text-menu font-semibold"
                    // onClick={() => DELETE(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
