'use client';
import React from 'react';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  ColumnDef,
} from '@tanstack/react-table';
import { useMemo } from 'react';

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
        // cell: ({ table }: any) => {
        //   return table
        //     .getCoreRowModel()
        //     .rows[id].original.subRows.map((subRow: any) =>
        //       subRow.date.toString()
        //     );
        // },
      },
      {
        header: 'USER ACTIVITY',
        accessorKey: 'useActivity',
        // cell: ({ table }: any) => {
        //   return table
        //     .getCoreRowModel()
        //     .rows[id].original.subRows.map(
        //       (subRow: any) => subRow.userActivity
        //     );
        // },
      },
      {
        header: 'DETAIL',
        accessorKey: 'detail',
        // cell: ({ table }: any) => {
        //   return table
        //     .getCoreRowModel()
        //     .rows[id].original.subRows.map((subRow: any) => subRow.detail);
        // },
      },
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
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
      <tbody>
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
  );
}
