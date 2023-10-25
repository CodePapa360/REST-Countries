import { useParams } from "react-router-dom";
import Button from "../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCountries } from "../services/countrySlice";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function CountryDetails() {
  scrollTo(0, 0);
  const dispatch = useDispatch();
  const { countryId } = useParams();
  const countries = useSelector((state) => state.country.countries);

  useEffect(() => {
    // Check if the countries data is available
    if (countries.length === 0) {
      // If not, fetch the countries data
      dispatch(fetchCountries());
    }
  }, [dispatch, countries]);

  // Find the specific country's data based on countryId
  const country = countries.find((coun) => coun.cca3 === countryId);

  // Ensure that countryDetails exists before rendering
  if (!country) return;
  console.log(country);

  const details = {
    alpha3Code: country.cca3,
    name: country.name.common,
    nativeName: country.name?.nativeName?.[0]?.common,
    flag: country.flags.svg,
    population: country.population,
    region: country.region,
    subregion: country.subregion,
    capital: country.capital, // array
    topLevelDomain: country.tld, // array
    currencies: country.currencies && Object.keys(country.currencies), // array
    languages: country.languages && Object.values(country.languages), // array
    independent: country.independent,
    borders: country.borders, // array
  };

  return (
    <div className="px-8 py-8 text-cmVeryVeryDarkBlue dark:text-cmWhite lg:px-16 lg:py-16">
      <Button extraClass="px-8" to="/">
        <span className="text-xl">&larr;</span> Back
      </Button>

      <div className="mx-auto grid grid-cols-1 justify-items-start gap-8 py-12 md:max-w-[1440px] md:grid-cols-2">
        <div className="lazyLoadDetailFlags w-full md:max-w-lg">
          <LazyLoadImage
            src={details.flag}
            alt={details.name}
            effect="blur"
            className="shadow-[0_0_15px_#00000033]"
          />
        </div>

        <div>
          <div className="mb-8 grid grid-cols-1 gap-8 leading-loose md:grid-cols-2 md:items-center">
            <div>
              <h2 className="mb-4 text-2xl font-[800] lg:text-3xl">
                {details.name}
              </h2>
              {details.nativeName && (
                <p>
                  <span className="font-[600]">Native Name:</span>{" "}
                  {details.nativeName}
                </p>
              )}
              <p>
                <span className="font-[600]">Population:</span>{" "}
                {new Intl.NumberFormat().format(details.population)}
              </p>
              <p>
                <span className="font-[600]">Region:</span> {details.region}
              </p>
              {details.subregion && (
                <p>
                  <span className="font-[600]">Sub Region:</span>{" "}
                  {details.subregion}
                </p>
              )}
              {details.capital && (
                <p>
                  <span className="font-[600]">Capital:</span>{" "}
                  {details.capital.join(", ")}
                </p>
              )}
            </div>

            <div>
              <p>
                <span className="font-[600]">Top Level Domain:</span>{" "}
                {details.topLevelDomain.join(", ")}
              </p>
              {details.currencies && (
                <p>
                  <span className="font-[600]">Currencies:</span>{" "}
                  {details.currencies.join(", ")}
                </p>
              )}
              {details.languages && (
                <p>
                  <span className="font-[600]">Languages:</span>{" "}
                  {details.languages.join(", ")}
                </p>
              )}
              <p>
                <span className="font-[600]">Independent:</span>{" "}
                {details.independent ? "Yes" : "No"}
              </p>
            </div>
          </div>

          {details.borders && (
            <div className="flex flex-col gap-4">
              <h2 className="text-lg font-[600]">Border Countries:</h2>
              <ul className="flex flex-wrap gap-4">
                {details.borders.map((border) => {
                  const borderCountry = countries.find(
                    (country) => country.cca3 === border,
                  );

                  const name = borderCountry.name.common;
                  const flag = borderCountry.flags.svg;

                  return (
                    <li key={border}>
                      <Button extraClass="px-2" to={`/country/${border}`}>
                        <span className="flex items-center gap-2">
                          <img src={flag} alt={name} width="24" height="16" />
                          <span>{name}</span>
                        </span>
                      </Button>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;
