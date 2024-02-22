import Image from 'next/image';
import { ChangeEvent } from 'react';

interface Props {
  table: Table<TData>;
}

export default function Footer(props: Props) {
  const { table } = props;
  return (
    <div className="flex justify-end items-center gap-5">
      <label htmlFor="per-page">
        <span>Rows per page:</span>
        <select
          className="bg-none"
          name="per-page"
          id="per-page"
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            table.setPageSize(+e.target.value)
          }
        >
          <option value="10">10</option>
          <option value="20">20</option>
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
