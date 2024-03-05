import { ColumnFilter } from '@tanstack/react-table';
import { Dispatch, SetStateAction, useState } from 'react';

interface Props {
  columnFilters: ColumnFilter[];
  setColumnFilters: Dispatch<SetStateAction<ColumnFilter[]>>;
  table: any;
}
interface CustomColumnFilter extends ColumnFilter {
  filterFn?: (row: any, columnId: string, filterValue: any) => boolean;
}

export default function FilterForPayment(props: Props) {
  const { columnFilters, setColumnFilters } = props;
  const [activeFilter, setActiveFilter] =
    useState<SetStateAction<string>>('All');

  const handleFilter = (event: any, value: string) => {
    event.preventDefault();
    setActiveFilter(value);

    let updatedFilters: CustomColumnFilter[] = [
      {
        id: 'paymentStatus',
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
  };

  return (
    <div className="flex justify-between items-center  border-border-clr">
      <div className="flex gap-5 text-sm border-b-[1px]">
        {['All', 'Paid', 'Unsalaried', 'Overdue'].map((item, index) => {
          return (
            <button
              key={index}
              className={`p-2 h-full text-text-btn-filter ${
                activeFilter === item ? 'border-b-2 border-text-header  ' : ''
              }
                `}
              onClick={(event) => handleFilter(event, item)}
            >
              {item}
            </button>
          );
        })}
      </div>

      <span className="text-sm py-2 text-text-btn-filter ">
        Total payable amount:
        <span className="text-lg font-bold text-text-total-prise">
          &nbsp;$900.00
        </span>
        <span className="text-lg text-text-btn-filter">&nbsp;USD</span>
      </span>
    </div>
  );
}
