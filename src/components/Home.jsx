import Country from "./Country";
import { useSelector } from "react-redux";
import { getFilteredCountries } from "../services/countrySlice";
import Search from "./Search";
import Filter from "./Filter";
import { useState } from "react";

function Home() {
  const state = useSelector((state) => state.country);
  const allCountries = getFilteredCountries(state);
  const [end, setEnd] = useState(10);

  const countries = allCountries.slice(0, end);

  function handleLoadMore() {
    let newEnd = end + 10;
    if (newEnd > allCountries.length) newEnd = allCountries.length;

    setEnd(() => newEnd);
  }

  return (
    <>
      <div className="flex flex-col justify-between gap-8 p-10 md:flex-row lg:mx-auto lg:max-w-[1440px]">
        <Search />
        <Filter />
      </div>

      {countries.length ? (
        <ul className="grid grid-cols-[repeat(auto-fill,_minmax(18rem,_auto))] items-center justify-center gap-8 p-4 md:gap-16 lg:mx-auto lg:max-w-[1440px]">
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
          className="mx-auto my-4 block rounded-md px-4 py-2 text-xl dark:bg-cmDarkBlue dark:text-cmWhite"
        >
          Load More{" "}
          <span className="rounded-md bg-slate-500/50 p-1 text-sm italic">
            ({allCountries.length - end}+)
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
