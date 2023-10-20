import Country from "./Country";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountries, getFilteredCountries } from "../services/countrySlice";
import Search from "./Search";
import Filter from "./Filter";
import { useEffect, useState } from "react";
import Loader from "../ui/Loader";

function Home() {
  const state = useSelector((state) => state.country);
  const dispatch = useDispatch();

  useEffect(() => {
    // Check if the countries data is available
    if (state.countries.length === 0) {
      // If not, fetch the countries data
      dispatch(fetchCountries());
    }
  }, [dispatch, state]);

  const allCountries = getFilteredCountries(state);
  const [end, setEnd] = useState(10);
  const countries = allCountries.slice(0, end);

  function handleLoadMore() {
    let newEnd = end + 10;
    if (newEnd > allCountries.length) newEnd = allCountries.length;

    setEnd(() => newEnd);
  }

  const isLoading = useSelector((state) => state.country.status !== "idle");
  if (isLoading) return <Loader />;

  return (
    <>
      <div className="flex flex-col justify-between gap-4 p-4 md:flex-row md:p-8 lg:mx-auto lg:max-w-[1440px]">
        <Search />
        <Filter />
      </div>

      {countries.length ? (
        <ul className="grid grid-cols-[repeat(auto-fill,_minmax(auto,_18rem))] items-center justify-center gap-8 p-4 md:gap-16 lg:mx-auto lg:max-w-[1440px]">
          {countries.map((country) => (
            <Country country={country} key={country.name} />
          ))}
        </ul>
      ) : (
        <p className="text-center text-xl font-[600] dark:text-cmWhite">
          No country found!😒
        </p>
      )}

      {end < allCountries.length && (
        <button
          onClick={handleLoadMore}
          className="mx-auto my-4 flex items-center justify-center gap-2 rounded-md px-4 py-2 shadow-[0_0_15px_#00000033] transition-transform hover:scale-110 dark:bg-cmDarkBlue dark:text-cmWhite"
        >
          <span>Load More</span>
          <span className=" inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-500/20 text-xs dark:bg-slate-500/20">
            {allCountries.length - end}+
          </span>
        </button>
      )}
    </>
  );
}

// export async function loader() {
//   const countries = await getCountries();
//   return countries;
// }

export default Home;
