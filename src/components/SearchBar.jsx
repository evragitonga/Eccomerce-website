function SearchBar({ search, setSearch }) {
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        className="sideBarInputs"
      />
    </div>
  );
}
export default SearchBar;
