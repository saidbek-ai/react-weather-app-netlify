import { BiSearch } from "react-icons/bi";

const Search = ({ searchValue, setSearchValue, handleSubmit }) => {
  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center items-center w-full sm:w-3/4  m-4 px-4 sm:px-0"
    >
      <label htmlFor="search" className="w-full relative">
        <input
          type="text"
          id="search"
          value={searchValue}
          onChange={handleChange}
          placeholder="Search by city"
          className="py-3 px-4 w-full outline-0 rounded"
        />
        <button
          type="submit"
          className="absolute bottom-0 right-0 text-3xl p-2 text-gray-400 hover:text-slate-500"
        >
          {" "}
          <BiSearch />
        </button>
      </label>
    </form>
  );
};

export default Search;
