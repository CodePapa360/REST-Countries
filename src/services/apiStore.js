const API_URL =
  "https://raw.githubusercontent.com/CodePapa360/JSON-Server/main/rest-countries-api/data.json";

export async function getCountries() {
  const res = await fetch(API_URL);
  if (!res.ok) throw Error("Failed getting countries");

  const data = await res.json();
  return data;
}
