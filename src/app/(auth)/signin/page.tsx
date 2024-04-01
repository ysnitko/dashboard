'use client';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { useState } from 'react';

export default function SignInPage() {
  const router = useRouter();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await signIn('credentials', {
      redirect: false,
      email,
      password,
    })
      .then((res) => {
        console.log(res);
        if (res?.ok) {
          router.replace('/users-field');
        } else {
          router.replace('/register');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <form
      onSubmit={onSubmitForm}
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
          value={email}
          onChange={(e) => setEmail(e.target.value as string)}
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
          value={password}
          onChange={(e) => setPassword(e.target.value as string)}
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
