'use client';
import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const session = useSession();

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-between items-center w-4/5 mt-5">
        <h1 className="text-text-header text-3xl">Data table application</h1>
        <div className="flex gap-4 items-center">
          <button
            className="bg-bg-color text-bg-page  text-text-header border-border-clr border-[1px] rounded-md px-2 py-1 hover:bg-text-header hover:text-bg-color hover:border-none"
            onClick={() => signIn()}
          >
            Sign in
          </button>
          <div className="flex flex-row gap-1 text-xs text-text-header flex-nowrap">
            <span className="text-nowrap">Don&apos;t have an account?</span>
            <Link
              href={'/register'}
              className="bg-bg-color text-bg-page underline"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col justify-center  items-center">
        <Image
          src="/assets/desktop-bg.png"
          width={900}
          height={90}
          alt="image"
        />
      </div>
    </div>
  );
}
