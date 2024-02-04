'use client';
import { createProject } from '@/app/lib/actions';
import { useRouter } from 'next/navigation';
import { prisma } from '../lib/prisma';
import { useEffect, useState } from 'react';

export default function CreateProjectForm() {
  const router = useRouter();
  const [usersArr, setUsersArr] = useState<
    {
      id: number;
      name: string;
      login: string;
      password: string;
      createdAt: Date;
      role: string;
      status: string;
    }[]
  >([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await prisma.users.findMany();

      setUsersArr(data);
    };

    fetchUsers();
  }, []);

  return (
    <form
      action={createProject}
      className="flex flex-col h-[85%] p-[30px] justify-between"
    >
      <div className="grid grid-cols-2 gap-x-8 gap-y-6">
        <label
          htmlFor="name"
          className="flex flex-col gap-2 text-sm font-semibold"
        >
          Name
          <input
            type="text"
            id="name"
            name="name"
            className="p-4 outline-none opacity-50 rounded-md "
          />
        </label>

        <label
          htmlFor="project-manager"
          className="flex flex-col gap-2 text-sm font-semibold"
        >
          Project manager
          <select
            name="project-manager"
            id="project-manager"
            className="p-4 outline-none opacity-50 rounded-md"
          >
            <option value="1">wewew</option>
            <option value="23">3424</option>
            {usersArr.map((user) => {
              return (
                <option key={user.name} value={user?.name}>
                  {user?.name}
                </option>
              );
            })}
          </select>
        </label>

        <label
          htmlFor="due-date"
          className="flex flex-col gap-2 text-sm font-semibold"
        >
          Due date
          <input
            type="date"
            id="due-date"
            name="due-date"
            className="p-4 outline-none opacity-50 rounded-md"
          />
        </label>
        <label
          htmlFor="status"
          className="flex flex-col gap-2 text-sm font-semibold"
        >
          Status
          <select
            name="status"
            id="status"
            className="p-4 outline-none opacity-50 rounded-md"
          >
            <option value="choose-status" selected>
              Choose status
            </option>
            <option value="completed">Completed</option>
            <option value="delayed">Delayed</option>
            <option value="at-risk">At risk</option>
            <option value="at-risk">On going</option>
          </select>
        </label>
        <label
          htmlFor="progress"
          className="flex flex-col gap-2 text-sm font-semibold"
        >
          Progress
          <input
            name="progress"
            id="progress"
            className="p-4 outline-none opacity-50 rounded-md"
          />
        </label>
      </div>
      <button
        type="submit"
        className="bg-bg-btn-block text-bg-page font-bold p-5 rounded-md bg-bg-active-btn"
        onClick={() => router.back()}
      >
        Submit
      </button>
    </form>
  );
}
