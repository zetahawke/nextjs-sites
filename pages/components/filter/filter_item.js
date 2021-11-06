const FilterItem = ({ item }) => {
  return (
    <div key={`filter-item-${item}`}>
      <h1 className="text-3xl font-bold"></h1>
      <img
        src="https://mdbootstrap.com/img/new/standard/city/026.jpg"
        alt="..."
        className="rounded max-w-full h-auto align-middle border-none"
      />
    </div>
  );
};

export default FilterItem;
