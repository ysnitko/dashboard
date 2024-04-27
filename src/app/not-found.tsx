'use client';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const route = useRouter();
  return (
    <div className="flex flex-col justify-center items-center h-screen text-text-header gap-3">
      <h1 className="text-5xl">Sorry! Page not found...</h1>
      <button className="underline text-xl" onClick={() => route.back()}>
        Tap to return
      </button>
    </div>
  );
}
