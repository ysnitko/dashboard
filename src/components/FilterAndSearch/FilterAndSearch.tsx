import Image from 'next/image';
export default function FilterAndSearch() {
  return (
    <div className="flex justify-between bg-bg-table-primary p-4">
      <div className="flex gap-4">
        <button className="flex text-base p-[10px] gap-3 border-[1px] rounded-md text-clr-primary">
          <Image src="/assets/Filter.svg" alt="filter" width={20} height={20} />
          Filter
          {/* <select multiple size={1}>
            <optgroup label="SORT BY:">
              <option value="">Default</option>
              <option value="">First Name</option>
              <option value="">Last Name</option>
              <option value="">Due Data</option>
              <option value="">Last Login</option>
            </optgroup>
            <optgroup label="USERS:">
              <option value="">All</option>
              <option value="">Active</option>
              <option value="">Inactive</option>
            </optgroup>
          </select> */}
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
            className=" bg-bg-color rounded-md text-[12px] min-w-[400px] p-[10px] px-[35px] text-text-btn-filter"
            type="search"
            name="search"
            id="search"
            placeholder="Search Users by Name, Email or Date"
          />
        </label>
      </div>
      <button className="bg-bg-btn-dues text-bg-color p-[10px] rounded-md font-semibold  ">
        PAY DUES
      </button>
    </div>
  );
}
