import Image from 'next/image';

interface Props {
  filtering: string;
  setFiltering: React.Dispatch<React.SetStateAction<string>>;
}

export default function FilterAndSearch(props: Props) {
  const { filtering, setFiltering } = props;
  return (
    <div className="flex justify-between bg-bg-table-primary p-4 mt-5">
      <div className="flex gap-4">
        <button className="flex text-base p-[10px] gap-3 border-[1px] rounded-md text-clr-primary">
          <Image src="/assets/Filter.svg" alt="filter" width={20} height={20} />
          Filter
        </button>
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
            placeholder="Search Users by Name, Email or Date"
          />
        </label>
      </div>
      <button className="bg-bg-btn-dues text-bg-color px-4 py-1 rounded-md font-semibold  text-base">
        PAY DUES
      </button>
    </div>
  );
}
