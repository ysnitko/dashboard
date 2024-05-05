'use client';
import { useEffect } from 'react';
import axios from 'axios';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  useEffect(() => {
    axios
      .get('/api/visit')
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-between items-center w-4/5 mt-5 max-sm:flex-col max-sm:gap-4 max-sm:mb-2">
        <h1 className="text-text-header text-3xl max-sm:text-2xl">
          Data table application
        </h1>
        <div className="flex gap-4 items-center max-sm:h-8">
          <button
            className="bg-bg-color text-bg-page  text-text-header border-border-clr border-[1px] rounded-md px-2 py-1 hover:bg-text-header hover:text-bg-color hover:border-none max-sm:w-[100px]"
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
