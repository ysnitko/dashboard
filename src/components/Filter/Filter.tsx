import React from 'react';
import { sortedFields, filterFields } from '@/app/lib/filter';
import { Dispatch, SetStateAction } from 'react';

interface Props {
  sorting: ColumnSort[];
  setSorting: React.Dispatch<React.SetStateAction<ColumnSort>>;
}

interface ColumnSort {
  [fieldName: string]: 'asc' | 'desc';
}

export default function Filter(props: Props) {
  const { sorting, setSorting } = props;

  const handleSort = (value: string) => {
    const updatedSorting: ColumnSort = {
      ...sorting,
      [value]: sorting[value] === 'asc' ? 'desc' : 'asc',
    };
    setSorting(updatedSorting);
  };

  return (
    <div className="flex flex-col min-w-[225px] p-4 absolute  top-14  left-0 bg-bg-table-primary z-10 rounded-md border-[1px]">
      <div className="flex flex-col gap-2">
        <p className="text-xs text-text-btn-filter tracking-widest">SORT BY:</p>
        {sortedFields.map((field) => {
          return (
            <label
              key={field.id}
              htmlFor={field.title}
              className="flex justify-between items-stretch"
            >
              <span className="text-sm text-clr-primary tracking-widest">
                {field.title}
              </span>
              <input
                type="checkbox"
                name={field.title}
                id={field.title}
                checked={sorting[field.title] !== undefined}
                onChange={() => handleSort(field.title)}
              />
            </label>
          );
        })}
        <div className="flex flex-col gap-2">
          <p className="text-xs text-text-btn-filter tracking-widest border-t-[1px] pt-2">
            USERS:
          </p>
          {filterFields.map((field) => {
            return (
              <label
                key={field.id}
                htmlFor={field.title}
                className="flex justify-between items-stretch"
              >
                <span className="text-sm text-clr-primary tracking-widest">
                  {field.title}
                </span>
                <input type="checkbox" name={field.title} id={field.title} />
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
}
