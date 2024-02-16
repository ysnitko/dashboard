'use client';
import { useEffect, useState } from 'react';
import { getUsers } from '@/app/lib/actions';
import { Users } from '@prisma/client';
import { ChangeEvent } from 'react';

export default function ProjectManagerSelected() {
  const [selectedOption, setSelectedOption] = useState(0);
  const [projectManagers, setProjectManagers] = useState<Users[]>([]);

  useEffect(() => {
    const allUsers = async () => {
      const res = await getUsers();
      setProjectManagers(res);
    };
    allUsers();
  }, []);

  const selectedUser = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(+e.target.value);
    console.log(selectedOption);
  };

  return (
    <select
      name="select-user"
      id="select-user"
      className="bg-bg-page text-sm text-clr-text-table font-semibold outline-none"
      defaultValue={selectedOption}
      onChange={selectedUser}
    >
      <option value={0}>All Users</option>
      {projectManagers.map((user) => {
        return (
          <option key={user?.id} value={user?.id}>
            {user?.name}
          </option>
        );
      })}
    </select>
  );
}
