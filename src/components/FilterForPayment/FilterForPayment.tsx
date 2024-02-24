import { ColumnFilter } from '@tanstack/react-table';
import { Dispatch, SetStateAction } from 'react';

interface Props {
  columnFilters: ColumnFilter[];
  setColumnFilters: Dispatch<SetStateAction<ColumnFilter[]>>;
  table: any;
}

export default function FilterForPayment(props: Props) {
  const { columnFilters, setColumnFilters, table } = props;

  const handleFilter = () => {
    console.log(
      props.table
      // .filter((column: string) => column.includes('paid')
    );

    // const updatedFilters = props.table
    //   .getColumn('paymentStatus')
    //   .map((column: any) => {
    //     if (column.id === 'paymentStatus') {
    //       // Замените 'yourColumnName' на имя вашей колонки
    //       return { ...column, filterValue: value };
    //     }
    //     return column;
    //   });

    // setColumnFilters(updatedFilters);
    // console.log(columnFilters);
  };

  return (
    <div className="flex justify-between items-center border-b-[1px] border-border-clr">
      <div className="flex gap-5 text-sm">
        {['All', 'Paid', 'Unpaid', 'Overdue'].map((item, index) => (
          <button
            key={index}
            className="p-2 text-text-btn-filter"
            onClick={() => handleFilter(item)}
          >
            {item}
          </button>
        ))}
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
