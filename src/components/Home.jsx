import Country from "./Country";
import { useSelector } from "react-redux";
import { getFilteredCountries } from "../services/countrySlice";
import Search from "./Search";
import Filter from "./Filter";

function Home() {
  const state = useSelector((state) => state.country);
  const countries = getFilteredCountries(state);

  return (
    <>
      <div className="flex flex-col justify-between gap-8 p-10 md:flex-row lg:mx-auto lg:max-w-[1440px]">
        <Search />
        <Filter />
      </div>

      <ul className="grid grid-cols-[repeat(auto-fill,_minmax(18rem,_auto))] items-center justify-center gap-8 p-4 md:gap-16 lg:mx-auto lg:max-w-[1440px]">
        {countries.map((country) => (
          <Country country={country} key={country.name} />
        ))}
      </ul>
    </>
  );
}

// export async function loader() {
//   const countries = await getCountries();
//   return countries;
// }

export default Home;
