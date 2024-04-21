import React, { useEffect } from 'react';
import { sortedFields, filterFields } from '@/app/lib/filter';
import { Dispatch, SetStateAction, useState } from 'react';
import { ColumnFilter, ColumnSort } from '@tanstack/react-table';

interface Props {
  columnFilters: ColumnFilter[];
  setColumnFilters: Dispatch<SetStateAction<ColumnFilter[]>>;
  sorting: ColumnSort[];
  setSorting: Dispatch<SetStateAction<ColumnSort[]>>;
}

interface CustomColumnFilter extends ColumnFilter {
  filterFn?: (row: any, columnId: string, filterValue: any) => boolean;
}

interface CustomColumnSorting extends ColumnSort {
  sortingFn?: (rowA: any, rowB: any, columnId: any) => number | undefined;
}

export default function Filter(props: Props) {
  const { setSorting, columnFilters, setColumnFilters } = props;
  const [selectedSort, setSelectedSort] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('');

  const onChangeSort = (columnName: string) => {
    let updateSorting: CustomColumnSorting[] = [
      {
        id: columnName,
        desc: false,
        sortingFn: (rowA, rowB, columnId) => {
          return rowA.getValue(columnId).value < rowB.getValue(columnId).value
            ? 1
            : -1;
        },
      },
    ];
    if (columnName === 'Default') {
      setSorting([]);
    } else {
      setSorting(updateSorting);
    }
    setSelectedSort(columnName);
  };

  const onChangeFilter = (value: string) => {
    let updatedFilters: CustomColumnFilter[] = [
      {
        id: 'userStatus',
        value: value === 'All' ? '' : value,
        filterFn: (row, columnId) => {
          if (value === 'All') {
            return true;
          } else {
            return row[columnId] === value;
          }
        },
      },
    ];
    setColumnFilters(updatedFilters);
    setSelectedFilter(value);
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
                type="radio"
                name="radiogroup1"
                id={field.title}
                checked={field.columnName === selectedSort}
                onChange={() => onChangeSort(field.columnName)}
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
                <input
                  type="radio"
                  name="radiogroup"
                  id={field.title}
                  checked={field.title === selectedFilter}
                  onChange={() => onChangeFilter(field.title)}
                />
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
}
