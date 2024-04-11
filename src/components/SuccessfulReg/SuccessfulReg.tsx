import Link from 'next/link';

export default function SuccessfulReg() {
  return (
    <div className="h-screen w-full flex justify-center  items-center">
      <p className="">Congratulations, you have registered</p>
      <div>
        <p>Log in to continue working</p>
      </div>
      <Link href={'/signin'}>Sign in </Link>
    </div>
  );
}
