'use client';
import { FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');

    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      router.push('/profile');
    } else {
      // Handle errors
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
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
