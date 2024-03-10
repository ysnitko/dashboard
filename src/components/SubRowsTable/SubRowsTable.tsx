import React from 'react';
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
import { useMemo } from 'react';
import { log } from 'console';

export default function SubRowsTable({
  users,
  id,
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
  id: number;
}) {
  const data = useMemo(() => users, [users]);

  const columns = React.useMemo<ColumnDef<any>[]>(
    () => [
      {
        header: 'DATE',
        accessorKey: 'date',
        cell: (props: any) => {
          return (
            <div>
              {props.row.original.subRows.map((subRow: any) => (
                <span key={subRow.id}>{subRow.date.toString()}</span>
              ))}
            </div>
          );
        },
      },
      {
        header: 'USER ACTIVITY',
        accessorKey: 'useActivity',
        cell: (props: any) => {
          return (
            <ul>
              {props.row.original.subRows.map((subRow: any) => (
                <li key={subRow.id}>{subRow.userActivity}</li>
              ))}
            </ul>
          );
        },
      },
      {
        header: 'DETAIL',
        accessorKey: 'detail',
        cell: (props: any) => {
          return (
            <ul>
              {props.row.original.subRows.map((subRow: any) => (
                <li key={subRow.id}>{subRow.detail}</li>
              ))}
            </ul>
          );
        },
      },
    ],
    []
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
  });

  return (
    <>
      {table.getHeaderGroups().map((headerGroup) => (
        <tr
          key={headerGroup.id}
          className="text-base font-semibold text-text-header tracking-widest border-border-clr border-[1px]"
        >
          {headerGroup.headers.map((header) => (
            <th key={header.id} className="p-4 text-left">
              {flexRender(header.column.columnDef.header, header.getContext())}
            </th>
          ))}
        </tr>
      ))}
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
    </>
  );
}
