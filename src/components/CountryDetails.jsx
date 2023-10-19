import { useParams } from "react-router-dom";
import Button from "../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCountries } from "../services/countrySlice";

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
  const countryDetails = countries.find(
    (coun) => coun.alpha3Code === countryId,
  );

  // Ensure that countryDetails exists before rendering
  if (!countryDetails) {
    // You can return a loading indicator or an error message here
    return <p>Loading...</p>;
  }

  return (
    <div className="px-8 py-8 dark:text-cmWhite lg:px-16 lg:py-16">
      <Button to="/">
        <span className="text-xl">&larr;</span> Back
      </Button>

      <div className="mx-auto grid grid-cols-1 gap-8 py-12 md:max-w-[1440px] md:grid-cols-2 ">
        <div className="md:max-w-lg">
          <img src={countryDetails.flags.svg} alt={countryDetails.name} />
        </div>

        <div>
          <div className="mb-8 flex flex-col gap-8 leading-loose md:flex-row md:items-center">
            <div>
              <h2 className="mb-4 text-2xl font-[800] lg:text-3xl">
                {countryDetails.name}
              </h2>
              <p>
                <span className="font-[600]">Native Name:</span>{" "}
                {countryDetails.nativeName}
              </p>
              <p>
                <span className="font-[600]">Population:</span>{" "}
                {countryDetails.population}
              </p>
              <p>
                <span className="font-[600]">Region:</span>{" "}
                {countryDetails.region}
              </p>
              <p>
                <span className="font-[600]">Sub Region:</span>{" "}
                {countryDetails.subregion}
              </p>
              <p>
                <span className="font-[600]">Capital:</span>{" "}
                {countryDetails.capital}
              </p>
            </div>

            <div>
              <p>
                <span className="font-[600]">Top Level Domain:</span>{" "}
                {countryDetails.topLevelDomain}
              </p>
              {countryDetails.currencies && (
                <p>
                  <span className="font-[600]">Currencies:</span>{" "}
                  {countryDetails.currencies[0].code}
                </p>
              )}
              <p>
                <span className="font-[600]">Languages:</span>{" "}
                {countryDetails.languages.map((lng) => lng.name).join(", ")}
              </p>
            </div>
          </div>

          {countryDetails.borders && (
            <div className="flex flex-col gap-4 lg:flex-row">
              <h2 className="whitespace-nowrap text-lg font-[600]">
                Border Countries:
              </h2>
              <ul className="flex flex-wrap gap-4">
                {/* Temporary */}
                {countryDetails.borders.map((br) => (
                  <li key={br}>
                    <Button to={`/country/${br}`}>{br}</Button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;
