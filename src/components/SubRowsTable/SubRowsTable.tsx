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
  const data = useMemo(() => subRowsData, [subRowsData]);
  console.log(data);

  const columns = React.useMemo<ColumnDef<any>[]>(
    () => [
      {
        header: 'DATE',
        accessorKey: 'date',
        cell: (props: any) => {
          const now = props.getValue().toString();
          if (props.getValue().toString() === null) {
            return null;
          }
          masks.hammerTime = 'dd/mmm/yyyy';
          dateformat(now, 'hammerTime');
          if (props.row.original.usersId === id) {
            return dateformat(now, 'hammerTime');
          } else {
            return null;
          }
        },
      },

      {
        header: 'USER ACTIVITY',
        accessorKey: 'userActivity',
        cell: (props: any) => {
          console.log(props.getValue());
          if (props.getValue() === null) {
            return null;
          }
          if (props.row.original.usersId === id) {
            return props.getValue();
          } else {
            return null;
          }
        },
      },
      {
        header: 'DETAIL',
        accessorKey: 'details',
        cell: (props: any) => {
          console.log(props.getValue());
          if (props.getValue() === null) {
            return null;
          }
          if (props.row.original.usersId === id) {
            return props.getValue();
          } else {
            return null;
          }
        },
      },
    ],
    [id]
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
            className="bg-bg-color border-border-clr border-[1px] "
          >
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} className="p-4 text-clr-primary text-sm">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
