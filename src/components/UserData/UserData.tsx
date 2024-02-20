import Image from "next/image";
export default function UserData() {
  return (
    <tr className="bg-bg-table-primary w-full">
      <td className="p-4 flex items-center gap-5">
        <input
          className="w-5 h-5"
          type="checkbox"
          name="check-user"
          id="check-user"
        />
        <button type="button">
          <Image
            src="/assets/closed-menu.svg"
            width={15}
            height={15}
            alt="toogle-info"
          />
        </button>
      </td>
      <td className="p-4 text-sm flex flex-col">
        <span className="text-clr-primary">Justin Septimus</span>
        <span className="text-text-header">example@email.com</span>
      </td>
      <td className="p-4 text-xs flex flex-col gap-1">
        <p className="flex gap-1 bg-bg-active-status rounded-[10px] px-2 py-[2px] w-fit">
          <Image
            src="/assets/status-active.svg"
            alt="status-active"
            width={6}
            height={6}
          />
          <span className="text-clr-active-status font-medium">Active</span>
        </p>
        <span className="text-xs font-medium text-text-header">
          Last login: 14/APR/2020
        </span>
      </td>
      <td className="p-4 text-xs flex flex-col gap-1">
        <p className="flex gap-1 bg-bg-paid-status rounded-[10px] px-2 py-[2px] w-fit">
          <Image
            src="/assets/status-paid.svg"
            alt="status-paid"
            width={6}
            height={6}
          />
          <span className="text-clr-paid-status font-medium">Paid</span>
        </p>
        <span className="text-xs font-medium text-text-header">
          Paid on 15/APR/2020
        </span>
      </td>

      <td className="p-4 text-sm flex flex-col gap-1 ">
        <span className="text-clr-primary font-medium">200$</span>
        <span className="text-xs font-medium text-text-header">USD</span>
      </td>
      <td className="p-4 flex">
        <span className="text-xs font-medium text-text-header">View More</span>
        <button type="button" className="w-[5px] h-[20px]">
          <Image src="/assets/More.svg" alt="more" width={5} height={20} />
        </button>
      </td>
    </tr>
  );
}
