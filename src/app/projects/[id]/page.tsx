import { updateProject } from '@/app/lib/actions';
import { prisma } from '@/app/lib/prisma';
import { findUser } from '@/app/lib/actions';

export default async function Project({ params }: { params: { id: string } }) {
  const id = +params.id;
  const data = await prisma.projects.findUnique({
    where: {
      id,
    },
  });
  const projectManager = await findUser(data?.projectManagerId ?? 0);

  const updateProjectWithId = updateProject.bind(null, parseInt(params.id));
  const users = await prisma.users.findMany();
  return (
    <form
      action={updateProjectWithId}
      className="flex flex-col h-[85%] p-[30px] justify-between"
    >
      <div className="grid grid-cols-2 gap-x-8 gap-y-6">
        <label
          htmlFor="title"
          className="flex flex-col gap-2 text-sm font-semibold"
        >
          Title
          <input
            type="text"
            id="title"
            name="title"
            className="p-4 outline-none opacity-50 rounded-md "
            defaultValue={data?.title}
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
            defaultValue={projectManager?.toString()}
          >
            <option value="choose-users">Choose user</option>
            {users.map((user) => {
              return (
                <option key={user.id} value={user?.name}>
                  {user?.name}
                  {user?.id}
                </option>
              );
            })}
          </select>
        </label>
        {/* 
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
      </label> */}
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
            <option value="choose-status">Choose status</option>
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
            defaultValue={data?.progress?.toString()}
          />
        </label>
      </div>
      <button
        type="submit"
        className="bg-bg-btn-block text-bg-page font-bold p-5 rounded-md bg-bg-active-btn"
      >
        Submit
      </button>
    </form>
  );
}
