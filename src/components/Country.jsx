import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { Link } from "react-router-dom";

function Country({ country }) {
  return (
    <li>
      <Link
        to={`/country/${country.alpha3Code}`}
        className="inline-block w-full max-w-[18rem] overflow-hidden rounded-md bg-cmWhite text-cmVeryVeryDarkBlue shadow-[0_0_15px_#00000033] transition-transform hover:scale-105 dark:bg-cmDarkBlue dark:text-cmWhite"
      >
        <div className="lazyLoadHomeFlags h-40 w-full">
          <LazyLoadImage
            alt={country.name}
            effect="blur"
            src={country.flags.svg}
          />
        </div>

        <div className="p-4">
          <h2 className="mb-4 text-lg font-[800]">{country.name}</h2>
          <p>
            <span className="font-[600]">Population:</span>{" "}
            {new Intl.NumberFormat().format(country.population)}
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
