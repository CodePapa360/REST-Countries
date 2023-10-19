import { Link } from "react-router-dom";

function Country({ country }) {
  return (
    <li>
      <Link
        to={`/country/${country.alpha3Code}`}
        className="inline-block w-full max-w-[18rem] overflow-hidden rounded-md dark:bg-cmDarkBlue dark:text-cmWhite"
      >
        <div className="h-40 w-full">
          <img
            className="h-full w-full object-cover"
            src={country.flags.svg}
            alt=""
          />
        </div>

        <div className="p-4">
          <h2 className="mb-4 text-lg font-[800]">{country.name}</h2>
          <p>
            <span className="font-[600]">Population:</span> {country.population}
          </p>
          <p>
            <span className="font-[600]">Region:</span> {country.region}
          </p>
          <p>
            <span className="font-[600]">Capital:</span> {country.capital}
          </p>
        </div>
      </Link>
    </li>
  );
}

// export async function loader({ params }) {
//   const country = await getCountry(params.countryId);
//   return country;
// }

export default Country;
