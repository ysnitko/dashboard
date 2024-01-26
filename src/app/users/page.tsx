"use client";
import Image from "next/image";
import { usersData } from "../db/dbusers";
import { useState } from "react";

export default function Users() {
  const [statusUser, setStatusIser] = useState("Active");

  return (
    <div className="p-[30px] flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <input
          type="search"
          className="rounded-md p-1 pl-2 text-sm"
          placeholder="Search for a user..."
        />
        <button className="text-sm bg-bg-active-btn rounded-md text-clr-text-menu font-bold px-2 py-1">
          Add new
        </button>
      </div>
      <table className="w-full border-bg-leftmenu border-collapse">
        <thead className="font-bold text-base text-clr-text-table ">
          <tr>
            <td>Name</td>
            <td>Login</td>
            <td>Password</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody className="text-sm font-semibold">
          {usersData.map((user) => {
            return (
              <tr key={user.id}>
                <td className="flex gap-2 p-2">
                  <Image
                    src={user.src}
                    alt="users icon"
                    width={20}
                    height={20}
                  />
                  <span>{user.name}</span>
                </td>
                <td className="p-2">{user.login}</td>
                <td className="p-2">{user.password}</td>
                <td className="p-2">
                  <span>{user.role}</span>
                </td>
                <td className="p-2 flex flex-row items-center gap-2 ">
                  {statusUser === "Active" ? (
                    <div className="w-2 h-2 rounded-full bg-clr-status-active"></div>
                  ) : (
                    <div className="w-2 h-2 rounded-full bg-bg-btn-delete"></div>
                  )}
                  <span> {user.status}</span>
                </td>
                <td className="p-2">
                  {statusUser === "Active" ? (
                    <button className="mr-2 bg-bg-btn-block px-[1.06rem] py-1 rounded-md text-sm text-clr-text-menu font-semibold">
                      Block
                    </button>
                  ) : (
                    <button className="mr-2 bg-clr-status-active px-2 py-1 rounded-md text-sm text-clr-text-menu font-semibold">
                      Unblock
                    </button>
                  )}

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
