'use client';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { menuLinks } from '@/app/lib/menu';

export default function Header() {
  const pathname = usePathname();
  const titleHeader = menuLinks.find((item) => item.href === pathname);

  return (
    <div className="flex justify-between p-[30px] items-center ">
      <h1 className="text-[32px] text-bg-leftmenu">TABLE HEADING</h1>
      <div className="flex items-center gap-[12px] ">
        <button className="h-[30px] w-[30px] rounded-full bg-bg-log-out bg-contain bg-no-repeat"></button>
        <div className="flex p-1 pr-4 gap-[10px] bg-clr-text-menu rounded-full">
          <Image
            src="/assets/avatar.svg"
            alt="avatar"
            width={30}
            height={30}
            className="rounded-full ml-1"
          />
          <div className="flex flex-col">
            <span className="text-sm text-bg-leftmenu">Adam Sandler</span>
            <span className="text-xs text-clr-text-position">Position</span>
          </div>
        </div>
      </div>
    </div>
  );
}
