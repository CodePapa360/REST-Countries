const API_URL = "https://restcountries.com/v3.1/all";

export async function getCountries() {
  const res = await fetch(API_URL);
  if (!res.ok) throw Error("Failed getting countries");
  const data = await res.json();

  // There is a mistake in the Afganistan's flag in the api data. So I replaced it immediately.

  const AFG = data.find((cn) => cn.cca3 === "AFG");
  AFG.flags.svg =
    "https://upload.wikimedia.org/wikipedia/commons/c/cd/Flag_of_Afghanistan_%282013%E2%80%932021%29.svg";

  return data;
}
