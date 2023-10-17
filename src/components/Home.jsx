import { useLoaderData } from "react-router-dom";
import { getCountries } from "../services/apiStore";
import Country from "./Country";

function Home() {
  const countries = useLoaderData();
  // console.log(countries);

  return (
    <ul className="grid grid-cols-[repeat(auto-fill,_minmax(18rem,_auto))] items-center justify-center gap-8 p-4 md:gap-16">
      {countries.map((country) => (
        <Country country={country} key={country.name} />
      ))}
    </ul>
  );
}

export async function loader() {
  const countries = await getCountries();
  return countries;
}

export default Home;
