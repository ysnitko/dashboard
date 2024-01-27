'use client';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import logo from '../../../public/assets/logo.svg';
import question from '../../../public/assets/question.svg';
import { menuLinks } from '@/app/db/menu';

export default function LeftMenu() {
  const pathname = usePathname();
  return (
    <div className="h-svh bg-bg-leftmenu pt-8 pb-8 px-[30px] flex flex-col gap-[70px] relative">
      <Image src={logo} alt="logo" width={140} height={30} />
      <div className="flex flex-col gap-[10px]">
        <div className="text-sm flex gap-[10px] pl-[7px]  py-[5px] rounded-3xl bg-clr-text-menu items-center mb-[40px]">
          <button className="bg-bg-active-btn rounded-full w-[34px] h-[34px] flex justify-center items-center">
            <Image src="assets/plus.svg" alt="plus" width={24} height={24} />
          </button>
          <span className="text-clr-new-project text-sm cursor-default">
            Create new project
          </span>
        </div>
        {menuLinks?.map((link) => {
          const isActive = pathname.startsWith(link.href);
          return (
            <Link
              href={link.href}
              key={link.title}
              className={
                isActive
                  ? 'text-bg-active-btn bg-clr-text-menu text-sm flex gap-4 py-[13px] pl-4 rounded-3xl'
                  : 'text-clr-text-menu text-sm flex gap-4 py-[13px] pl-4 rounded-3xl'
              }
            >
              {isActive ? link.icon_active : link.icon}
              <span>{link.title}</span>
            </Link>
          );
        })}
      </div>
      <button className="absolute bottom-6 left-6 bg-bg-active-btn w-10 h-10 rounded-full flex justify-center items-center">
        <Image
          src={question}
          alt="question"
          width={30}
          height={30}
          className="max-w-none"
        />
      </button>
    </div>
  );
}
