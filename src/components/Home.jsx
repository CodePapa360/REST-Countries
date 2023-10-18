import { useLoaderData } from "react-router-dom";
import { getCountries } from "../services/apiStore";
import Country from "./Country";
import { useDispatch, useSelector } from "react-redux";
import {
  filterAfrica,
  filterAmerica,
  filterEurope,
  getFilteredCountries,
} from "../services/countrySlice";

function Home() {
  const countr = useSelector((state) => state.country);
  const countries = getFilteredCountries(countr);
  // console.log(countries);
  // const countries = useLoaderData();
  // const dispatch = useDispatch();

  return (
    <>
      <ul className="grid grid-cols-[repeat(auto-fill,_minmax(18rem,_auto))] items-center justify-center gap-8 p-4 md:gap-16">
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
