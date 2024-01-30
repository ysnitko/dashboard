'use client';
import { createUser } from '@/app/lib/actions';
import { useRouter } from 'next/navigation';

export default function CreateUserForm() {
  const router = useRouter();

  return (
    <form
      action={createUser}
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
          htmlFor="email"
          className="flex flex-col gap-2 text-sm font-semibold"
        >
          Email
          <input
            type="email"
            id="email"
            name="email"
            className="p-4 outline-none opacity-50 rounded-md"
          />
        </label>

        <label
          htmlFor="password"
          className="flex flex-col gap-2 text-sm font-semibold"
        >
          Password
          <input
            type="password"
            id="password"
            name="password"
            className="p-4 outline-none opacity-50 rounded-md"
          />
        </label>

        <label
          htmlFor="role"
          className="flex flex-col gap-2 text-sm font-semibold"
        >
          Role
          <input
            type="text"
            id="role"
            name="role"
            className="p-4 outline-none opacity-50 rounded-md"
          />
        </label>

        <label
          htmlFor="status"
          className="flex flex-col gap-2 text-sm font-semibold"
        >
          Status
          <input
            type="text"
            id="status"
            name="status"
            className="p-4 outline-none opacity-50 rounded-md"
          />
        </label>
        <label
          htmlFor="role-sel"
          className="flex flex-col gap-2 text-sm font-semibold"
        >
          Role
          <select
            name="role-sel"
            id="role-sel"
            className="p-4 outline-none opacity-50 rounded-md"
          >
            <option value="choose-role" selected>
              Choose role
            </option>
            <option value="admin">Admin</option>
            <option value="project-manager">Project manager</option>
          </select>
        </label>
        <label
          htmlFor="status-sel"
          className="flex flex-col gap-2 text-sm font-semibold"
        >
          Status
          <select
            name="status-sel"
            id="status-sel"
            className="p-4 outline-none opacity-50 rounded-md"
          >
            <option value="choose-status" selected>
              Choose status
            </option>
            <option value="active">Active</option>
            <option value="blocked">Blocked</option>
          </select>
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
