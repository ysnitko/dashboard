import Link from 'next/link';

export default function SuccessfulReg() {
  return (
    <div className="h-screen w-full flex justify-center flex-col items-center text-text-header gap-6">
      <p className="text-3xl ">Congratulations, you have registered.</p>
      <div className="flex">
        <p className="">
          <Link href={'/signin'} className="font-bold underline">
            Sign in
          </Link>
          &nbsp;to continue working or return to &nbsp;
          <Link href={'/'} className="font-bold underline">
            main page
          </Link>
        </p>
      </div>
    </div>
  );
}
