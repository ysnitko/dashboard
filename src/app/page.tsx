import FilterForPayment from '@/components/FilterForPayment/FilterForPayment';
import Header from '@/components/Header/Header';
import UsersSection from '@/components/UsersSection/UsersSection';

export default function Home() {
  return (
    <>
      <Header />
      <FilterForPayment />
      <UsersSection />
    </>
  );
}
