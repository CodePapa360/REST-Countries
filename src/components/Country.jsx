import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { Link } from "react-router-dom";

function Country({ country }) {
  const details = {
    alpha3Code: country.cca3,
    name: country.name.common,
    flag: country.flags.svg,
    population: country.population,
    region: country.region,
    capital: country.capital?.[0],
  };

  return (
    <li className="h-full">
      <Link
        to={`/country/${details.alpha3Code}`}
        className="inline-block h-full w-full max-w-[18rem] overflow-hidden rounded-md bg-cmWhite text-cmVeryVeryDarkBlue shadow-[0_0_15px_#00000033] transition-transform hover:scale-105 dark:bg-cmDarkBlue dark:text-cmWhite"
      >
        <div className="lazyLoadHomeFlags h-40 w-full">
          <LazyLoadImage alt={details.name} effect="blur" src={details.flag} />
        </div>

        <div className="p-4">
          <h2 className="mb-4 text-lg font-[800]">{details.name}</h2>
          <p>
            <span className="font-[600]">Population:</span>{" "}
            {new Intl.NumberFormat().format(details.population)}
          </p>
          <p>
            <span className="font-[600]">Region:</span> {details.region}
          </p>
          {details.capital && (
            <p>
              <span className="font-[600]">Capital:</span> {details.capital}
            </p>
          )}
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
