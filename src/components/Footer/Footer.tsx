import Image from 'next/image';
import { ChangeEvent } from 'react';

interface Props {
  table: any;
}

export default function Footer(props: Props) {
  const { table } = props;
  return (
    <div className="flex justify-end items-center gap-10 p-4 text-xs font-semibold text-text-btn-filter border-[1px] border-border-clr border-t-0  rounded-b-[8px]">
      <label htmlFor="per-page">
        <span className="tracking-widest">Rows per page:</span>
        <select
          className="bg-bg-color"
          name="per-page"
          id="per-page"
          value={table.getState().pagination.pageSize}
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            table.setPageSize(+e.target.value)
          }
        >
          {[10, 20].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              {pageSize}
            </option>
          ))}
        </select>
      </label>
      <p>
        {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
      </p>
      <button
        disabled={!table.getCanPreviousPage()}
        onClick={() => table.previousPage()}
      >
        <Image src="/assets/left.svg" alt="prev" width={6} height={10} />
      </button>
      <button
        disabled={!table.getCanNextPage()}
        onClick={() => table.nextPage()}
      >
        <Image src="/assets/right.svg" alt="next" width={6} height={10} />
      </button>
    </div>
  );
}
