export default function FilterAndSearch() {
  return (
    <div className="flex justify-between">
      <div className="flex gap-4">
        <button>filter</button>
        <input type="search" name="search" id="search" />
      </div>
      <button>PAY DUES</button>
    </div>
  );
}
