import FilterForPayment from '@/components/FilterForPayment/FilterForPayment';
import Header from '@/components/Header/Header';
import Table from '@/components/Table/Table';

export default function Home() {
  return (
    <>
      <Header />
      <div className=" ">
        <FilterForPayment />
        <Table />
      </div>
    </>
  );
}
