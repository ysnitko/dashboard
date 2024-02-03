'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function BackButton() {
  const router = useRouter();
  return (
    <>
      <button
        className="max-w-5  text-sm flex gap-1"
        type="button"
        onClick={() => router.back()}
      >
        <Image src="/assets/back.svg" alt="back" width={40} height={40} />
        <span>Back</span>
      </button>
    </>
  );
}
