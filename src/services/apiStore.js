const API_URL =
  "https://raw.githubusercontent.com/CodePapa360/JSON-Server/main/rest-countries-api/data.json";

export async function getCountries() {
  const res = await fetch(API_URL);
  if (!res.ok) throw Error("Failed getting countries");

  const data = await res.json();
  const AFG = data.find((cn) => cn.alpha3Code === "AFG");

  // There is a mistake in the Afganistan's flag in the api data. So I replaced it immediately.

  AFG.flags.svg =
    "https://upload.wikimedia.org/wikipedia/commons/c/cd/Flag_of_Afghanistan_%282013%E2%80%932021%29.svg";
  AFG.flag =
    "https://upload.wikimedia.org/wikipedia/commons/c/cd/Flag_of_Afghanistan_%282013%E2%80%932021%29.svg";

  return data;
}
