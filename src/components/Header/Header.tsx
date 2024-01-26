"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { menuLinks } from "@/app/db/menu";

export default function Header() {
  const pathname = usePathname();
  const titleHeader = menuLinks.find((item) => item.href === pathname);

  return (
    <div className="flex justify-between p-[30px] items-center ">
      <h1 className="text-[32px] text-bg-leftmenu">{titleHeader?.title}</h1>
      <div className="flex items-center gap-[10px] ">
        <button className="h-[46px] w-[46px] rounded-full bg-clr-text-menu text-xs">
          log out
        </button>
        <div className="flex p-1 pr-4 gap-[10px] bg-clr-text-menu rounded-full">
          <Image
            src=""
            alt="avatar"
            width={38}
            height={38}
            className="rounded-full bg-bg-active-btn"
          />
          <div className="flex flex-col">
            <span className="text-sm text-bg-leftmenu">Name User</span>{" "}
            <span className="text-xs text-clr-text-position">Position</span>
          </div>
        </div>
      </div>
    </div>
  );
}
