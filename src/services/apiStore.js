const API_URL = "https://restcountries.com/v3.1/all";

export async function getCountries() {
  const res = await fetch(API_URL);
  if (!res.ok) throw Error("Failed getting countries");
  const data = await res.json();
  return data;
}
