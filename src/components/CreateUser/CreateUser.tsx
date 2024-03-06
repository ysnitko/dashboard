import { createUser } from '@/app/lib/actions';
import { Dispatch, SetStateAction } from 'react';

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
      <h2 className="text-text-header font-bold text-xl border-b-2 mb-4">
        Create user
      </h2>
      <div className="grid grid-cols-2 gap-x-8 gap-y-4">
        <label
          htmlFor="name"
          className="flex flex-col text-sm gap-2  text-text-header font-semibold"
        >
          Name
          <input
            type="text"
            id="name"
            name="name"
            className="p-3 outline-none opacity-50 rounded-md bg-bg-color"
          />
        </label>

        <label
          htmlFor="email"
          className="flex flex-col gap-2 text-sm font-semibold text-text-header"
        >
          Email
          <input
            type="email"
            id="email"
            name="email"
            className="p-3 outline-none opacity-50 rounded-md bg-bg-color"
          />
        </label>

        <label
          htmlFor="user-status"
          className="flex flex-col gap-2 text-sm font-semibold text-text-header"
        >
          User status
          <select
            name="user-status"
            id="user-status"
            className="p-3 outline-none opacity-50 rounded-md bg-bg-color [&_option]:font-medium"
            defaultValue="Blocked"
          >
            <option value="Active">Active</option>
            <option value="Blocked">Blocked</option>
          </select>
        </label>
        <label
          htmlFor="payment-status"
          className="flex flex-col gap-2 text-sm font-semibold text-text-header"
        >
          Payment status
          <select
            name="payment-status"
            id="payment-status"
            className="p-3 outline-none opacity-50 rounded-md bg-bg-color font-semibold
            [&_option]:font-medium"
            defaultValue="Unsalaried"
          >
            <option value="Paid">Paid</option>
            <option value="Unsalaried">Unsalaried</option>
            <option value="Overdue">Overdue</option>
          </select>
        </label>
        <label
          htmlFor="status"
          className="flex flex-col gap-2 text-sm font-semibold text-text-header"
        >
          Amount
          <input
            type="text"
            id="amount"
            name="amount"
            className="p-3 outline-none opacity-50 rounded-md bg-bg-color "
          />
        </label>
      </div>
      <div className="flex w-full gap-3 justify-center">
        <button
          type="submit"
          className="bg-bg-color text-bg-page font-bold p-3 rounded-md mt-10 w-1/3 text-text-header"
        >
          Create
        </button>
        <button
          type="button"
          className="bg-bg-color text-bg-page font-bold p-3 rounded-md mt-10 w-1/3  text-text-header opacity-50 hover:opacity-100"
          onClick={() => setCreateUser(false)}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
