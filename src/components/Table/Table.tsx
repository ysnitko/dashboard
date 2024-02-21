'use client';
import Image from 'next/image';
import React, { useMemo, useState } from 'react';
import { DATA } from '../../table';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import FilterAndSearch from '../FilterAndSearch/FilterAndSearch';

const columns = [
  {
    header: () => {
      return (
        <input
          className="w-5 h-5"
          type="checkbox"
          name="check-user"
          id="check-user"
        />
      );
    },
    accessorKey: 'id',
    cell: () => {
      return (
        <input
          className="w-5 h-5"
          type="checkbox"
          name="check-user"
          id="check-user"
        />
      );
    },
  },
  {
    header: 'NAME',
    accessorKey: 'name',
    cell: (props: any) => {
      return (
        <p className="text-sm flex flex-col">
          <span className="text-clr-primary">{props.getValue()}</span>
          <span className="text-text-header">{props.row.original.email}</span>
        </p>
      );
    },
  },
  {
    header: 'USER STATUS',
    accessorKey: 'user_status',
    cell: (props: any) => {
      return (
        <div className="text-xs flex flex-col gap-1 justify-center">
          <p className="flex gap-1 bg-bg-active-status rounded-[10px] px-2 py-[2px] w-fit">
            <Image
              src="/assets/status-active.svg"
              alt="status-active"
              width={6}
              height={6}
            />
            <span className="text-clr-active-status font-medium">
              {props.row.original.user_status}
            </span>
          </p>
          <span className="text-xs font-medium text-text-header">
            Last login: 14/APR/2020
          </span>
        </div>
      );
    },
  },

  {
    header: 'PAYMENT STATUS',
    accessorKey: 'payment_status',
    cell: (props: any) => {
      return (
        <div className="text-xs flex flex-col gap-1 justify-start">
          <p className="flex gap-1 bg-bg-paid-status rounded-[10px] px-2 py-[2px] w-fit justify-left">
            <Image
              src="/assets/status-paid.svg"
              alt="status-paid"
              width={6}
              height={6}
            />
            <span className="text-clr-paid-status font-medium">
              {props.row.original.payment_status}
            </span>
          </p>
          <span className="text-xs font-medium text-text-header">
            Paid on 15/APR/2020
          </span>
        </div>
      );
    },
  },

  {
    header: 'AMOUNT',
    accessorKey: 'amount',
    cell: () => {
      return (
        <p className="text-sm flex flex-col gap-1 justify-start">
          <span className="text-clr-primary font-medium">200$</span>
          <span className="text-xs font-medium text-text-header">USD</span>
        </p>
      );
    },
  },
  {
    header: () => {
      return (
        <div className="flex justify-end">
          <Image
            className=""
            src="/assets/More.svg"
            width={20}
            height={20}
            alt="more"
          />
        </div>
      );
    },
    accessorKey: 'view_more',
    cell: () => {
      return (
        <div className="flex justify-end items-end gap-4">
          <span className="text-xs font-medium text-text-header">
            View More
          </span>
          <button type="button" className="w-[20px] h-[20px]">
            <Image src="/assets/More.svg" alt="more" width={20} height={20} />
          </button>
        </div>
      );
    },
  },
];

export default function Table() {
  const data: {
    id: number;
    name: string;
    payment_status: string;
    amount: number;
    email: string;
  }[] = useMemo(() => DATA, []);
  console.log(DATA);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <FilterAndSearch />

      <table className="w-full">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr
              key={headerGroup.id}
              className="text-base font-semibold text-text-header tracking-widest border-border-clr border-[1px] "
            >
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="p-4 text-left">
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="text-left">
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className="bg-bg-table-primary border-border-clr border-[1px] "
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="p-4">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
