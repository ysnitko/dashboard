'use client';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { SetStateAction, useState } from 'react';
import { SessionState } from 'http2';

export default function SignInPage() {
  const router = useRouter();

  const [valueInputEmail, setValueInputEmail] = useState<string>('');
  const [valueInputPass, setValueInputPass] = useState<string>('');
  console.log(valueInputEmail);

  const onSubmitForm = (valueInputEmail: any, valueInputPass: any) => {
    signIn({ ...valueInputEmail, ...valueInputPass, callbackUrl: '/' });
  };

  return (
    <form
      onSubmit={() => onSubmitForm(valueInputEmail, valueInputPass)}
      className="flex flex-col p-[30px] min-w-[350px] justify-between absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4  bg-bg-table-primary border-[1px] rounded-md
    shadow-xl gap-3"
    >
      <label
        htmlFor="password"
        className="flex flex-col gap-2 text-sm font-semibold text-text-header"
      >
        Email
        <input
          type="email"
          className="p-3 outline-none opacity-50 rounded-md bg-bg-color"
          name="email"
          placeholder="Email"
          value={valueInputEmail}
          onChange={(e) => setValueInputEmail(e.target.value as string)}
          required
        />
      </label>

      <label
        htmlFor="password"
        className="flex flex-col gap-2 text-sm font-semibold text-text-header"
      >
        Password
        <input
          type="password"
          className="p-3 outline-none opacity-50 rounded-md bg-bg-color"
          name="password"
          placeholder="Password"
          value={valueInputPass}
          onChange={(e) => setValueInputPass(e.target.value as string)}
          required
        />
      </label>
      <button
        type="submit"
        className="bg-bg-color text-bg-page font-bold p-2 rounded-md w-1/2 text-text-header"
      >
        Login
      </button>
    </form>
  );
}
