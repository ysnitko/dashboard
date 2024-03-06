import { createUser } from '@/app/lib/actions';
import { Children, Dispatch, SetStateAction } from 'react';

export default function CreateUser({
  setCreateUser,
}: {
  setCreateUser: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <form
      action={createUser}
      onSubmit={() => setCreateUser(false)}
      className="flex flex-col  p-[30px] justify-between absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4  bg-bg-table-primary border-[1px] rounded-md
      shadow-xl
      "
    >
      {Children}
    </form>
  );
}
