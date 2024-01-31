import { updateUser } from '@/app/lib/actions';
import { prisma } from '@/app/lib/prisma';

export default async function User({ params }: { params: { id: string } }) {
  const id = +params.id;
  const data = await prisma.users.findUnique({
    where: {
      id,
    },
  });
  const updateUserWithId = updateUser.bind(null, parseInt(params.id));

  return (
    <form
      action={updateUserWithId}
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
            defaultValue={data?.name}
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
            defaultValue={data?.login}
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
            defaultValue={data?.password}
          />
        </label>
        <label
          htmlFor="role"
          className="flex flex-col gap-2 text-sm font-semibold"
        >
          Role
          <select
            name="role"
            id="role-sel"
            className="p-4 outline-none opacity-50 rounded-md"
            defaultValue={data?.role}
          >
            <option value="choose-role" selected>
              Choose role
            </option>
            <option value="admin">Admin</option>
            <option value="project manager">Project manager</option>
          </select>
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
            defaultValue={data?.status}
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
      >
        Save
      </button>
    </form>
  );
}
