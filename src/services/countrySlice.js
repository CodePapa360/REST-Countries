import { createSlice } from "@reduxjs/toolkit";
import { getCountries } from "./apiStore";

async function initCountries() {
  const countries = await getCountries();
  return countries;
}

const initialState = {
  countries: await initCountries(),
  filter: "",
  query: "All",
};

const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    filterRegion(state, action) {
      state.filter = action.payload;
    },
  },
});

export const getFilteredCountries = (state) => {
  const { countries, filter, query } = state;
  switch (filter) {
    case "Africa":
      return countries.filter((country) => {
        const filtered = country.region === "Africa";
        if (!filtered) return false;
        if (filtered && !query) return true;
        if (country.name.toLowerCase().includes(query.toLowerCase()))
          return true;
        return false;
      });
    case "Asia":
      return countries.filter((country) => {
        const filtered = country.region === "Asia";
        if (!filtered) return false;
        if (filtered && !query) return true;
        if (country.name.toLowerCase().includes(query.toLowerCase()))
          return true;
        return false;
      });
    case "America":
      return countries.filter((country) => {
        const filtered = country.region === "Americas";
        if (!filtered) return false;
        if (filtered && !query) return true;
        if (country.name.toLowerCase().includes(query.toLowerCase()))
          return true;
        return false;
      });
    case "Europe":
      return countries.filter((country) => {
        const filtered = country.region === "Europe";
        if (!filtered) return false;
        if (filtered && !query) return true;
        if (country.name.toLowerCase().includes(query.toLowerCase()))
          return true;
        return false;
      });
    case "Oceania":
      return countries.filter((country) => {
        const filtered = country.region === "Oceania";
        if (!filtered) return false;
        if (filtered && !query) return true;
        if (country.name.toLowerCase().includes(query.toLowerCase()))
          return true;
        return false;
      });
    case "All":
      return countries.filter((country) => {
        if (!query) return true;
        if (country.name.toLowerCase().includes(query.toLowerCase()))
          return true;
        return false;
      });
    default:
      return countries;
  }
};

export const { filterRegion, updateQuery } = countrySlice.actions;

export default countrySlice.reducer;
