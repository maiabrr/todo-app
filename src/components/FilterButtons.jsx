function FilterButtons({ filter, setFilter }) {
  const filters = ['All', 'Active', 'Completed'];

  return (
    <div className="flex justify-center gap-2 mb-4">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={`px-4 py-1 rounded-md border transition ${
            filter === f
                ? 'bg-blue-500 text-white border-blue-500'
                : 'bg-white text-gray-700 dark:bg-gray-700 dark:text-white border-gray-300 dark:border-gray-600'
            }`}
        >
          {f}
        </button>
      ))}
    </div>
  );
}

export default FilterButtons;
