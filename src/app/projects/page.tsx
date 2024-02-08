import Image from 'next/image';
import Link from 'next/link';
import BackButton from '@/components/BackButton/BackButton';
import { prisma } from '../lib/prisma';
import { Projects } from '@prisma/client';
import ProgressBar from '@/components/ProgressBar/ProgressBar';

export default async function Projects() {
  const projects = await prisma.projects.findMany();
  const users = await prisma.users.findMany();
  console.log(projects);

  // const [selectedOption, setSelectedOption] = useState('all-users');

  // const handleSelectAll = (event: ChangeEvent<HTMLSelectElement>) => {
  //   setSelectedOption(event.target.value);
  // };

  return (
    <div className="p-[30px] pt-3 flex flex-col gap-5">
      <BackButton />
      <div>
        <select
          name="select-user"
          id="select-user"
          className="bg-bg-page text-sm text-clr-text-table font-semibold outline-none"
          // onChange={handleSelectAll}
          // defaultValue={selectedOption}
        >
          <option value="all-users">All Users</option>
          {users.map((user) => {
            return (
              <option key={user?.id} value={user?.name}>
                {user?.name}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <div className="flex justify-between">
          <div
            // className={
            //   selectedOption === 'all-users' ? 'invisible flex' : 'flex'
            // }
            className="flex"
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
            <td>Project manager</td>
            <td>Due date</td>
            <td>Days left</td>
            <td>Status</td>
            <td>Progress</td>
          </tr>
        </thead>
        <tbody className="text-sm">
          {projects.map((project: Projects) => {
            // const modifyStringDate = project.createdAt
            //   .toString()
            //   .substring(0, project.createdAt.toString().indexOf('GMT'));

            return (
              <tr
                key={project?.id}
                className="bg-bg-section rounded-sm text-center"
              >
                <td className="p-2">{project?.name}</td>
                <td className="p-2">
                  {/* {projectsUsers.map((manager) => {
                    return <span>{manager}</span>;
                  })} */}
                </td>
                {/* <td className="p-2">{project?.dueData}</td> */}
                {/* <td className="p-2">{modifyStringDate}</td> */}
                {/* <td className="p-2"><span>{project?.status}</span></td> */}
                {/* <td className="p-2">
                  <ProgressBar progress={+project?.progress} />
                </td> */}

                <td className="p-2 ">
                  <div className="flex justify-center ">
                    <Link
                      href={`/projects/${project?.id}`}
                      className="mr-2 bg-bg-btn-block px-[1.06rem] py-1 rounded-md text-sm text-clr-text-menu font-semibold bg-bg-btn-edit"
                      type="submit"
                    >
                      Complete
                    </Link>
                    <form action="">
                      <button
                        className="bg-bg-btn-delete px-2 py-1 rounded-md text-sm text-clr-text-menu font-semibold"
                        type="submit"
                      >
                        Delete
                      </button>
                    </form>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
