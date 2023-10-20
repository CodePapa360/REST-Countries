import { useDispatch, useSelector } from "react-redux";
import { updateQuery } from "../services/countrySlice";

function Search() {
  // const [query, setQuery] = useState("");
  const query = useSelector((state) => state.country.query);
  const dispatch = useDispatch();

  function handleQuery(e) {
    const value = e.target.value;

    dispatch(updateQuery(value));
    // setQuery(value);
  }

  return (
    <div className="flex w-full items-center rounded-md bg-cmWhite text-cmVeryVeryDarkBlue shadow-[0_0_15px_#00000033] focus-within:outline-dotted focus-within:outline-offset-2 focus-within:outline-gray-500 dark:bg-cmDarkBlue dark:text-cmWhite md:max-w-md">
      <label htmlFor="search" className="px-6 text-cmDarkGray">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
          />
        </svg>
      </label>
      <input
        id="search"
        className="w-full bg-transparent p-4 outline-none dark:text-cmWhite"
        value={query}
        onChange={handleQuery}
        placeholder="Search for a country..."
        type="text"
      />
    </div>
  );
}

export default Search;
