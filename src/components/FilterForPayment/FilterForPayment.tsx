import { ColumnFilter } from '@tanstack/react-table';
import { Dispatch, SetStateAction, useState } from 'react';

interface Props {
  columnFilters: ColumnFilter[];
  setColumnFilters: Dispatch<SetStateAction<ColumnFilter[]>>;
  users: {
    id: number;
    name: string | null;
    email: string | null;
    userStatus: string;
    createdAt: Date;
    paymentStatus: string;
    amount: number;
    subRows: any[];
  }[];
}

interface CustomColumnFilter extends ColumnFilter {
  filterFn?: (row: any, columnId: string, filterValue: any) => boolean;
}

export default function FilterForPayment(props: Props) {
  const { setColumnFilters, users } = props;
  const [activeFilter, setActiveFilter] =
    useState<SetStateAction<string>>('All');

  const handleFilter = (
    event: React.MouseEvent<HTMLButtonElement>,
    value: string
  ) => {
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

  const totalPayable = () => {
    return users.reduce((acc, user) => {
      if (user.paymentStatus === 'Paid') {
        return acc + Number(user.amount);
      }
      return acc;
    }, 0);
  };

  return (
    <div className="flex justify-between  border-border-clr border-b-[1px] max-sm:p-1 max-sm:flex-col">
      <div className="flex gap-5 text-sm min-h-full">
        {['All', 'Paid', 'Unsalaried', 'Overdue'].map((item, index) => {
          return (
            <button
              key={index}
              className={`h-full p-1 text-text-btn-filter ${
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
      <span className="text-sm py-1 text-text-btn-filter w-full text-right max-sm:text-left ">
        Total payable amount:
        <span className="text-lg font-bold text-text-total-prise">
          &nbsp;${totalPayable()}
        </span>
        <span className="text-lg text-text-btn-filter max-sm:text-[14px]">
          &nbsp;USD
        </span>
      </span>
    </div>
  );
}
