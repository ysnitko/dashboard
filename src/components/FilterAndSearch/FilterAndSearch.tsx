import Image from 'next/image';
import Filter from '../Filter/Filter';
import { useState, useRef, useEffect, Dispatch, SetStateAction } from 'react';
import { listenForOutsideClicks } from '../listenForOutsideClicks/listenForOutsideClicks';
import { ColumnSort, ColumnFilter } from '@tanstack/react-table';

interface Props {
  filtering: string;
  setFiltering: React.Dispatch<React.SetStateAction<string>>;
  columnFilters: ColumnFilter[];
  setColumnFilters: Dispatch<SetStateAction<ColumnFilter[]>>;
  sorting: ColumnSort[];
  setSorting: Dispatch<SetStateAction<ColumnSort[]>>;
}

export default function FilterAndSearch(props: Props) {
  const { filtering, setFiltering } = props;
  const [toggledFilter, setToggleFilter] = useState(false);
  const [listening, setListening] = useState(false);
  const menuRef = useRef(null);

  const toggle = () => {
    setToggleFilter(!toggledFilter);
  };

  useEffect(
    listenForOutsideClicks(listening, setListening, menuRef, setToggleFilter)
  );

  return (
    <div className="flex justify-between bg-bg-table-primary p-4 mt-5 border-[1px] border-border-clr border-b-0  rounded-t-[8px]">
      <div className="flex gap-4 relative" ref={menuRef}>
        <button
          className="flex text-base p-[10px] gap-3 border-[1px] rounded-md text-clr-primary"
          onClick={toggle}
        >
          <Image src="/assets/Filter.svg" alt="filter" width={20} height={20} />
          Filter
        </button>
        {toggledFilter && <Filter {...props} />}

        <label htmlFor="search" className="flex relative">
          <Image
            src="/assets/Search.svg"
            alt="search"
            width={20}
            height={20}
            className="absolute top-[12px] left-[10px]"
          />
          <input
            className=" bg-bg-color rounded-md text-[12px] min-w-[400px] p-[10px] pl-[40px] text-text-btn-filter"
            type="search"
            name="search"
            id="search"
            value={filtering}
            onChange={(e) => setFiltering(e.target.value)}
            placeholder="Search Users by Name, Status or Amount"
          />
        </label>
      </div>
      <button className="bg-bg-btn-dues text-bg-color px-4 py-1 rounded-md font-semibold  text-base">
        PAY DUES
      </button>
    </div>
  );
}
