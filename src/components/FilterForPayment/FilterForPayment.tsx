interface Props {
  filtering: string;
  setFiltering: React.Dispatch<React.SetStateAction<string>>;
}

export default function FilterForPayment(props: Props) {
  const { filtering, setFiltering } = props;
  return (
    <div className="flex justify-between items-center border-b-[1px] border-border-clr">
      <div className="flex gap-5 text-sm">
        <button
          className="p-2 text-text-btn-filter"
          onClick={() => setFiltering('paid')}
        >
          All
        </button>
        <button className="p-2 text-text-btn-filter">Paid</button>
        <button className="p-2 text-text-btn-filter">Unpaid</button>
        <button className="p-2 text-text-btn-filter d">Overdue</button>
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
