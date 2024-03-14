'use client';
import Image from 'next/image';
import React, { useMemo, useState, useCallback } from 'react';
import FilterAndSearch from '../FilterAndSearch/FilterAndSearch';
import FilterForPayment from '../FilterForPayment/FilterForPayment';
import Footer from '../Footer/Footer';
import UserMenu from '../UserMenu/UserMenu';
import dateformat, { masks } from 'dateformat';
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
  getExpandedRowModel,
  ExpandedState,
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
    subRows: any[];
  }[];
}) {
  const data = useMemo(() => users, [users]);
  const [filtering, setFiltering] = useState<string>('');
  const [columnFilters, setColumnFilters] = useState<ColumnFilter[]>([]);
  const [sorting, setSorting] = useState<ColumnSort[]>([]);
  const [openRowId, setOpenRowId] = useState<number | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [expanded, setExpanded] = React.useState<ExpandedState>({});

  const handleOpenView = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>, id: number) => {
      event.preventDefault();
      setOpen(true);
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

  const columns = React.useMemo<ColumnDef<any>[]>(
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
        cell: (props) => {
          return (
            <div className="flex gap-3 justify-between">
              <input
                className="w-5 h-5"
                type="checkbox"
                name="check-user"
                id="check-user"
              />
              {props.row.getCanExpand() ? (
                <button
                  {...{
                    onClick: props.row.getToggleExpandedHandler(),
                    style: { cursor: 'pointer' },
                  }}
                >
                  {props.row.getIsExpanded() ? (
                    <Image
                      src={'/assets/open-menu.svg'}
                      width={15}
                      height={15}
                      alt="toggle"
                    />
                  ) : (
                    <Image
                      src={'/assets/closed-menu.svg'}
                      width={15}
                      height={15}
                      alt="toggle"
                    />
                  )}
                </button>
              ) : (
                ''
              )}
            </div>
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
          const now = props.row.original.createdAt;
          masks.hammerTime = 'dd/mmm/yyyy';
          dateformat(now, 'hammerTime');

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
                    Created at: {`${dateformat(now, 'hammerTime')}`}
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
                    Created at: {`${dateformat(now, 'hammerTime')}`}
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
          const now = props.row.original.createdAt;
          masks.hammerTime = 'dd/mmm/yyyy';
          dateformat(now, 'hammerTime');

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
                {props.row.original.paymentStatus === 'Paid'
                  ? `Paid on ${dateformat(now, 'hammerTime')}`
                  : props.row.original.paymentStatus === 'Unsalaried'
                  ? `Dues on ${dateformat(now, 'hammerTime')}`
                  : props.row.original.paymentStatus === 'Overdue'
                  ? `Dued on ${dateformat(now, 'hammerTime')}`
                  : ''}
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
            <div className="flex justify-end items-end gap-4 relative">
              <span className="text-xs font-medium text-text-header">
                View More
              </span>
              <button
                id={rowId}
                type="button"
                className={`w-[20px] h-[20px] `}
                onClick={(e) => handleOpenView(e, rowId)}
              >
                <Image
                  src="/assets/More.svg"
                  alt="more"
                  width={20}
                  height={20}
                />
              </button>
              {open && isOpen ? (
                <UserMenu setOpen={setOpen} rowId={rowId} />
              ) : (
                ''
              )}
            </div>
          );
        },
      },
    ],
    [openRowId, handleOpenView, open]
  );

  const table = useReactTable({
    data,
    columns,
    enableExpanding: true,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    state: {
      globalFilter: filtering,
      columnFilters: columnFilters,
      sorting,
      expanded,
    },
    onGlobalFilterChange: setFiltering,
    onColumnFiltersChange: setColumnFilters,
    onSortingChange: setSorting,
    onExpandedChange: setExpanded,
    getSubRows: (row) => row.subRows,
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
            <>
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
            </>
          ))}
        </tbody>
      </table>
      <Footer {...props} />
    </div>
  );
}
