import FilterAndSearch from '../FilterAndSearch/FilterAndSearch';
import { Table } from '../Table/Table';

export default function UsersSection() {
  return (
    <div className="rounded-xl mt-5 border-solid border-[1px]">
      <FilterAndSearch />
      <Table />
    </div>
  );
}
