'use client';
import { signIn } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const session = useSession();

  if (session?.data) {
    router.push('/signin');
  } else {
    return (
      <div
        className="flex flex-col p-[30px] min-w-[350px] justify-between absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4  bg-bg-table-primary border-[1px] rounded-md
    shadow-xl gap-3 items-center"
      >
        <h1 className="text-text-header text-xl">Hi, you are not sign in!</h1>
        <div className="flex justify-between gap-2 items-center">
          <button
            className="bg-bg-color text-bg-page font-bold px-3 py-2 rounded-md w-1/2 text-text-header"
            onClick={() => signIn()}
          >
            Sign in
          </button>
          <span className="text-text-header">or</span>
          <button
            className="bg-bg-color text-bg-page font-bold px-3 py-2 rounded-md w-1/2 text-text-header"
            onClick={() => signIn()}
          >
            Register
          </button>
        </div>
      </div>
    );
  }
}
