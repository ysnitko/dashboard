'use client';
import Image from 'next/image';
import UserData from '../UserData/UserData';
import React, { useState } from 'react';
import { useReactTable } from '@tanstack/react-table';
import { DATA } from './table';

const columns = [{}];

export default function Table() {
  const [data, setData] = useState(DATA);
  const table = useReactTable({
    data,
    columns,
  });

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr key={} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
    </table>

    // <table className="w-full border-collapse border-border-clr border-1 p-3">
    //   <thead className="font-bold text-base text-clr-text-table">
    //     <tr className="text-[14px] font-semibold text-text-header tracking-widest w-full">
    //       <td className="p-4 w-1">
    //         <input
    //           className="w-5 h-5"
    //           type="checkbox"
    //           name="check-user"
    //           id="check-user"
    //         />
    //       </td>
    //       <td className="p-4 w-1/3">NAME</td>
    //       <td className="p-4 w-1/3">USER STATUS</td>
    //       <td className="p-4 w-1/3">PAYMENT STATUS</td>
    //       <td className="p-4 w-1/3">AMOUNT</td>
    //       <td className="p-4 w-1/3">
    //         <Image src="/assets/More.svg" width={20} height={20} alt="more" />
    //       </td>
    //     </tr>
    //   </thead>
    //   <tbody className="">
    //     <UserData />
    //   </tbody>
    //   <tfoot>
    //     <tr>
    //       <td>Footer</td>
    //     </tr>
    //   </tfoot>
    // </table>
  );
}
