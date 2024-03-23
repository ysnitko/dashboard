'use client';
import React from 'react';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  ColumnDef,
} from '@tanstack/react-table';
import { useMemo } from 'react';
import dateformat, { masks } from 'dateformat';

export default function SubRowsTable({
  subRowsData,
  id,
}: {
  subRowsData: {
    id: number;
    date: Date;
    userActivity: string;
    details: string;
    usersId: number | null;
  }[];
  id: number;
}) {
  const data = useMemo(
    () => subRowsData.filter((row) => row.usersId === id),
    [subRowsData, id]
  );

  const columns = React.useMemo<ColumnDef<any>[]>(
    () => [
      {
        header: 'DATE',
        accessorKey: 'date',
        size: 70,
        cell: (props: any) => {
          const now = props.getValue().toString();
          masks.hammerTime = 'HH:MM:ss ddd mmm dd yyyy';
          return dateformat(now, 'hammerTime');
        },
      },

      {
        header: 'USER ACTIVITY',
        accessorKey: 'userActivity',
        size: 100,
        cell: (props: any) => {
          return props.getValue();
        },
      },
      {
        header: 'DETAIL',
        accessorKey: 'details',
        size: 200,
        cell: (props: any) => {
          return props.getValue();
        },
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
            className="text-base font-semibold text-text-header tracking-widest border-border-clr border-[1px] bg-bg-header-user-profile"
          >
            {headerGroup.headers.map((header) => (
              <th
                key={header.id}
                style={{ width: header.getSize() }}
                className="p-2 text-left"
              >
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
            className="bg-bg-color border-border-clr border-[1px] "
          >
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} className="p-2 text-clr-primary text-sm">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
