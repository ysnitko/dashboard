import { createUser } from '@/app/lib/actions';
import { Dispatch, SetStateAction } from 'react';

export default function CreateUser({
  setCreateUser,
}: {
  setCreateUser: Dispatch<SetStateAction<boolean>>;
}) {
  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setCreateUser(false);
  };

  return (
    <form
      action={createUser}
      className="flex flex-col  p-[30px] justify-between absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4  bg-bg-table-primary"
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
          htmlFor="user-status"
          className="flex flex-col gap-2 text-sm font-semibold"
        >
          User Status
          <select
            name="user-status"
            id="user-status"
            className="p-4 outline-none opacity-50 rounded-md"
            defaultValue="Blocked"
          >
            <option value="Active">Active</option>
            <option value="Blocked">Blocked</option>
          </select>
        </label>
        <label
          htmlFor="payment-status"
          className="flex flex-col gap-2 text-sm font-semibold"
        >
          Payment Status
          <select
            name="payment-status"
            id="payment-status"
            className="p-4 outline-none opacity-50 rounded-md"
            defaultValue="Unsalaried"
          >
            <option value="Paid">Paid</option>
            <option value="Unsalaried">Unsalaried</option>
            <option value="Overdue">Overdue</option>
          </select>
        </label>
        <label
          htmlFor="status"
          className="flex flex-col gap-2 text-sm font-semibold"
        >
          Amount
          <input
            type="text"
            id="amount"
            name="amount"
            className="p-4 outline-none opacity-50 rounded-md "
          />
        </label>
      </div>
      <button
        type="submit"
        className="bg-bg-btn-block text-bg-page font-bold p-5 rounded-md bg-bg-active-btn"
        // onClick={(e) => handleSubmit(e)}
      >
        Submit
      </button>
    </form>
  );
}
