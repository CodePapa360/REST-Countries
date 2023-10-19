import { Link, useParams } from "react-router-dom";
import Button from "../ui/Button";
import { useSelector } from "react-redux";

const dummyCountry = {
  name: "Belgium",
  topLevelDomain: [".be"],
  alpha2Code: "BE",
  alpha3Code: "BEL",
  callingCodes: ["32"],
  capital: "Brussels",
  altSpellings: [
    "BE",
    "België",
    "Belgie",
    "Belgien",
    "Belgique",
    "Kingdom of Belgium",
    "Koninkrijk België",
    "Royaume de Belgique",
    "Königreich Belgien",
  ],
  subregion: "Western Europe",
  region: "Europe",
  population: 11555997,
  latlng: [50.83333333, 4],
  demonym: "Belgian",
  area: 30528,
  gini: 27.2,
  timezones: ["UTC+01:00"],
  borders: ["FRA", "DEU", "LUX", "NLD"],
  nativeName: "België",
  numericCode: "056",
  flags: {
    svg: "https://flagcdn.com/be.svg",
    png: "https://flagcdn.com/w320/be.png",
  },
  currencies: [
    {
      code: "EUR",
      name: "Euro",
      symbol: "€",
    },
  ],
  languages: [
    {
      iso639_1: "nl",
      iso639_2: "nld",
      name: "Dutch",
      nativeName: "Nederlands",
    },
    {
      iso639_1: "fr",
      iso639_2: "fra",
      name: "French",
      nativeName: "français",
    },
    {
      iso639_1: "de",
      iso639_2: "deu",
      name: "German",
      nativeName: "Deutsch",
    },
  ],
  translations: {
    br: "Belgia",
    pt: "Bélgica",
    nl: "België",
    hr: "Belgija",
    fa: "بلژیک",
    de: "Belgien",
    es: "Bélgica",
    fr: "Belgique",
    ja: "ベルギー",
    it: "Belgio",
    hu: "Belgium",
  },
  flag: "https://flagcdn.com/be.svg",
  regionalBlocs: [
    {
      acronym: "EU",
      name: "European Union",
    },
  ],
  cioc: "BEL",
  independent: true,
};

function CountryDetails() {
  const country = useSelector((state) => state.country.countries);
  const { countryId } = useParams();
  // console.log(country, countryId);

  const countryDetails = country.find((coun) => coun.alpha3Code === countryId);
  // console.log(countryDetails);
  // const countryDetails = dummyCountry;

  return (
    <div className="px-8 py-8 dark:text-cmWhite lg:px-16 lg:py-16">
      <Button to="/">
        <span className="text-xl">&larr;</span> Back
      </Button>

      <div className="mx-auto flex max-w-xl flex-col justify-center gap-8 py-12 lg:max-w-[1440px] lg:flex-row lg:items-center lg:gap-32">
        <div className="lg:max-w-md xl:max-w-xl">
          <img
            className="h-auto w-full"
            src={countryDetails.flags.svg}
            alt={countryDetails.name}
          />
        </div>

        <div>
          <div className="mb-8 flex flex-col gap-8 leading-loose lg:flex-row lg:items-center">
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
            <div className="flex flex-col gap-4 md:flex-row">
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
