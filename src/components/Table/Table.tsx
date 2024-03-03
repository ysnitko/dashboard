'use client';
import Image from 'next/image';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import FilterAndSearch from '../FilterAndSearch/FilterAndSearch';
import FilterForPayment from '../FilterForPayment/FilterForPayment';
import Footer from '../Footer/Footer';
import { Users } from '@prisma/client';
import UserMenu from '../UserMenu/UserMenu';
import {
  textStatusPayment,
  bgStatusPayment,
  srcStatusPayment,
} from '@/app/lib/table';

import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
  getPaginationRowModel,
  ColumnFilter,
  ColumnSort,
  ColumnDef,
} from '@tanstack/react-table';

export default function Table({
  users,
}: {
  users: {
    id: number;
    name: string;
    email: string;
    userStatus: string;
    createdAt: Date;
    paymentStatus: string;
    amount: number;
  }[];
}) {
  const data = useMemo(() => users, [users]);
  const [filtering, setFiltering] = useState<string>('');
  const [columnFilters, setColumnFilters] = useState<ColumnFilter[]>([]);
  const [sorting, setSorting] = useState<ColumnSort[]>([]);
  const [openRowId, setOpenRowId] = useState<number | null>(null);

  const handleOpen = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>, id: number) => {
      event.preventDefault();
      setOpenRowId((prevOpenRowId) => {
        if (prevOpenRowId === id) {
          return null;
        } else {
          return id;
        }
      });
    },
    []
  );

  const columns = React.useMemo<ColumnDef<Users, any>[]>(
    () => [
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
              <span className="text-text-header">
                {props.row.original.email}
              </span>
            </p>
          );
        },
      },
      {
        header: 'USER STATUS',
        accessorKey: 'userStatus',
        cell: (props: any) => {
          return (
            <div className="text-xs flex flex-col gap-1 justify-center">
              {props.getValue() === 'Active' ? (
                <>
                  <p className="flex gap-1 bg-bg-active-status rounded-[10px] px-2 py-[2px] w-fit">
                    <Image
                      src="/assets/status-active.svg"
                      alt="status-active"
                      width={6}
                      height={6}
                    />
                    <span className="text-clr-active-status font-medium">
                      {props.getValue()}
                    </span>
                  </p>
                  <span className="text-xs font-medium text-text-header">
                    Last login: 14/APR/2020
                  </span>
                </>
              ) : (
                <>
                  <p className="flex gap-1 bg-bg-active-status rounded-[10px] px-2 py-[2px] w-fit">
                    <Image
                      src="/assets/status-inactive.svg"
                      alt="status-inactive"
                      width={6}
                      height={6}
                    />
                    <span className="text-clr-inactive-status font-medium">
                      {props.getValue()}
                    </span>
                  </p>
                  <span className="text-xs font-medium text-text-header">
                    Last login: 14/APR/2020
                  </span>
                </>
              )}
            </div>
          );
        },
      },

      {
        header: 'PAYMENT STATUS',
        accessorKey: 'paymentStatus',
        cell: (props: any) => {
          const textColorStatus = textStatusPayment(props.getValue());
          const bgClrStatus = bgStatusPayment(props.getValue());
          const srcImgPayment = srcStatusPayment(props.getValue());
          return (
            <div className="text-xs flex flex-col gap-1 justify-start">
              <p
                className={`flex gap-1 ${bgClrStatus} rounded-[10px] px-2 py-[2px] w-fit justify-left`}
              >
                <Image
                  src={`${srcImgPayment}`}
                  alt="status-paid"
                  width={6}
                  height={6}
                />
                <span className={`${textColorStatus} font-medium`}>
                  {props.getValue()}
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
        cell: (props: any) => {
          return (
            <p className="text-sm flex flex-col gap-1 justify-start">
              <span className="text-clr-primary font-medium">
                ${props.getValue()}
              </span>
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

        cell: (props: any) => {
          const rowId = props.row.original.id;
          const isOpen = rowId === openRowId;
          return (
            <div className="flex justify-end items-end gap-4 left-0 relative">
              <span className="text-xs font-medium text-text-header">
                View More
              </span>
              <button
                id={rowId}
                type="button"
                className="w-[20px] h-[20px]"
                onClick={(e) => handleOpen(e, rowId)}
              >
                <Image
                  src="/assets/More.svg"
                  alt="more"
                  width={20}
                  height={20}
                />
              </button>
              <div className="absolute top-2 right-0">
                {isOpen && <UserMenu {...props} />}
              </div>
            </div>
          );
        },
      },
    ],
    [openRowId, handleOpen]
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      globalFilter: filtering,
      columnFilters: columnFilters,
      sorting,
    },
    onGlobalFilterChange: setFiltering,
    onColumnFiltersChange: setColumnFilters,
    onSortingChange: setSorting,
  });

  const props = {
    filtering: filtering,
    setFiltering: setFiltering,
    table: table,
    sorting,
    setSorting,
    columnFilters: columnFilters,
    setColumnFilters: setColumnFilters,
    setOpenRowId: setOpenRowId,
  };

  return (
    <div>
      <FilterForPayment
        columnFilters={columnFilters}
        setColumnFilters={setColumnFilters}
        table={table}
      />
      <FilterAndSearch {...props} />
      <table className="w-full">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr
              key={headerGroup.id}
              className="text-base font-semibold text-text-header tracking-widest border-border-clr border-[1px]"
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
      <Footer {...props} />
    </div>
  );
}
