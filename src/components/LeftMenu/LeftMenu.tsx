import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/assets/logo.svg";
import question from "../../../public/assets/question.svg";

const menuLinks = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: "/assets/dashboard.svg",
  },
  {
    title: "Projects",
    href: "/projects",
    icon: `/assets/briefcase.svg`,
  },
  { title: "Tasks", href: "/tasks", icon: "/assets/task.svg" },
  { title: "Time log", href: "/time-log", icon: "/assets/clock.svg" },
  {
    title: "Resource mgnt",
    href: "/resource-mgnt",
    icon: "/assets/resource.svg",
  },
  { title: "Users", href: "/users", icon: "/assets/users.svg" },
  {
    title: "Project template",
    href: "/project-template",
    icon: "/assets/project-template.svg",
  },
  {
    title: "Menu settings",
    href: "/menu-settings",
    icon: "/assets/setting.svg",
  },
];

export default function LeftMenu() {
  return (
    <div className="h-svh bg-black pt-8 pb-8 px-[30px] flex flex-col gap-[70px] relative">
      <Image src={logo} alt="logo" width={140} height={30} />
      <div className="flex flex-col gap-6">
        {menuLinks.map((link) => {
          return (
            <Link
              href={link.href}
              key={link.title}
              className="text-[#F1F1F1] text-sm flex gap-4"
            
            >
              <Image src={link.icon} alt={link.title} width={20} height={20} />
              <span>{link.title}</span>
            </Link>
          );
        })}
      </div>
      <button className="absolute bottom-6 left-6 bg-[#E65F2B] w-10 h-10 rounded-full flex items-center justify-center">
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
