export default function FilterForPayment() {
  return (
    <div className="flex justify-between items-center border-b-[1px] border-border-clr">
      <div className="flex  gap-5 text-sm">
        <button className="p-2 text-text-btn-filter">All</button>
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
