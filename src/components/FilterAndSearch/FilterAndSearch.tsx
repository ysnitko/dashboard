'use client';
import Image from 'next/image';
import Filter from '../Filter/Filter';
import { useState, useRef, useEffect, Dispatch, SetStateAction } from 'react';
import { listenForOutsideClicks } from '../listenForOutsideClicks/listenForOutsideClicks';
import { ColumnSort, ColumnFilter } from '@tanstack/react-table';
import { updateSetUserPaid } from '@/app/lib/actions';

interface Props {
  filtering: string;
  setFiltering: React.Dispatch<React.SetStateAction<string>>;
  columnFilters: ColumnFilter[];
  setColumnFilters: Dispatch<SetStateAction<ColumnFilter[]>>;
  sorting: ColumnSort[];
  setSorting: Dispatch<SetStateAction<ColumnSort[]>>;
  table: any;
}

export default function FilterAndSearch(props: Props) {
  const { filtering, setFiltering, table } = props;
  const [toggledFilter, setToggleFilter] = useState(false);
  const [listening, setListening] = useState(false);
  const menuRef = useRef(null);

  const changedId: number[] = table
    .getSelectedRowModel()
    .rows.map((targetId: any) => targetId.original.id);

  const toggle = () => {
    setToggleFilter(!toggledFilter);
  };

  const handlePayDues = async () => {
    if (changedId.length === 0) {
      return;
    }
    await updateSetUserPaid(changedId);
  };

  useEffect(
    listenForOutsideClicks(listening, setListening, menuRef, setToggleFilter)
  );

  return (
    <div className="flex justify-between bg-bg-table-primary p-4 mt-5 border-[1px] border-border-clr border-b-0  rounded-t-[8px] max-sm:p-2">
      <div className="flex gap-4 relative max-sm:gap-2" ref={menuRef}>
        <button
          className="flex text-base p-[10px] gap-3 border-[1px] rounded-md text-clr-primary max-sm:p-[5px] max-sm:w-[70px] max-sm:text-sm max-sm:gap-1 max-sm:items-center"
          onClick={toggle}
        >
          <Image src="/assets/Filter.svg" alt="filter" width={20} height={20} />
          Filter
        </button>
        {toggledFilter && <Filter {...props} />}
        <label htmlFor="search" className="flex relative max-sm:items-center">
          <Image
            src="/assets/Search.svg"
            alt="search"
            width={20}
            height={20}
            className="absolute top-[12px] left-[10px] max-sm:top-[10px]"
          />
          <input
            className=" bg-bg-color rounded-md text-[12px] min-w-[400px] p-[10px] pl-[40px] text-text-btn-filter max-sm:min-w-[150px]"
            type="search"
            name="search"
            id="search"
            value={filtering}
            onChange={(e) => setFiltering(e.target.value)}
            placeholder="Search Users by Name, Status or Amount"
          />
        </label>
      </div>
      <button
        className="bg-bg-btn-dues text-bg-color px-4 py-1 rounded-md font-semibold  text-base max-sm:text-sm max-sm:p-1"
        style={{
          opacity: changedId.length === 0 ? '0.5' : '1',
          cursor: changedId.length === 0 ? 'not-allowed' : '',
        }}
        onClick={handlePayDues}
      >
        PAY DUES
      </button>
    </div>
  );
}
