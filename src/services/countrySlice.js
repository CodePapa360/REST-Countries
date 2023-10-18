import { createSlice } from "@reduxjs/toolkit";
import { getCountries } from "./apiStore";

async function initCountries() {
  const countries = await getCountries();
  return countries;
}

const initialState = {
  countries: await initCountries(),
  filter: "all",
};

const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    filterAll(state) {
      state.filter = "All";
    },
    filterAfrica(state) {
      state.filter = "Africa";
    },
    filterAmerica(state) {
      state.filter = "Americas";
    },
    filterAsia(state) {
      state.filter = "Asia";
    },
    filterEurope(state) {
      state.filter = "Europe";
    },
    filterOceania(state) {
      state.filter = "Oceania";
    },
  },
});

export const getFilteredCountries = (state) => {
  const { countries, filter } = state;
  switch (filter) {
    case "Africa":
      return countries.filter((country) => country.region === "Africa");
    case "Asia":
      return countries.filter((country) => country.region === "Asia");
    case "Americas":
      return countries.filter((country) => country.region === "Americas");
    case "Europe":
      return countries.filter((country) => country.region === "Europe");
    case "Oceania":
      return countries.filter((country) => country.region === "Oceania");
    default:
      return countries;
  }
};

export const {
  filterAll,
  filterAfrica,
  filterAmerica,
  filterAsia,
  filterEurope,
  filterOceania,
} = countrySlice.actions;

export default countrySlice.reducer;
