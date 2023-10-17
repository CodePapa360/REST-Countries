import { Link } from "react-router-dom";

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
  //   const { countryId } = useParams();
  const countryDetails = dummyCountry;

  return (
    <div className="dark:text-cmWhite">
      <Link to={"/"}>&larr;Back</Link>

      <div>
        <div>
          <img src={countryDetails.flags.svg} alt="" />
        </div>

        <div>
          <div>
            <div>
              <h2>{countryDetails.name}</h2>
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
              <p>
                <span className="font-[600]">Currencies:</span>{" "}
                {countryDetails.currencies[0].code}
              </p>
              <p>
                <span className="font-[600]">Languages:</span>{" "}
                {countryDetails.languages.map((lng) => lng.name).join(", ")}
              </p>
            </div>
          </div>

          <div>
            <h2>Border Countries:</h2>
            <div>
              {/* Temporary */}
              {countryDetails.borders.map((br) => (
                <Link to={`/country/${br}`} key={br}>
                  {br}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;
