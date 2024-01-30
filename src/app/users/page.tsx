import { Users } from '@prisma/client';
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
      <table className="w-full border-bg-leftmenu border-separate border-spacing-y-3">
        <thead className="font-bold text-base text-clr-text-table">
          <tr>
            <td className="p-2">Name</td>
            <td className="p-2">Login</td>
            <td className="p-2">Password</td>
            <td className="p-2">Created at</td>
            <td className="p-2">Role</td>
            <td className="p-2">Status</td>
            <td></td>
          </tr>
        </thead>
        <tbody className="text-sm font-semibold">
          {users.map((user: Users) => {
            const modifyStringDate = user.createdAt
              .toString()
              .substring(0, user.createdAt.toString().indexOf('GMT'));

            return (
              <tr key={user?.id} className="bg-bg-section rounded-sm">
                <td className="p-2">{user?.name}</td>
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
                  <button className="mr-2 bg-bg-btn-block px-[1.06rem] py-1 rounded-md text-sm text-clr-text-menu font-semibold bg-bg-btn-edit">
                    Edit
                  </button>
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
