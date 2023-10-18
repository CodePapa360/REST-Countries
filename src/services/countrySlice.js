import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCountries } from "./apiStore";

export const fetchCountries = createAsyncThunk(
  "country/fetchCountries",
  async function () {
    const countries = await getCountries();
    return countries;
  },
);

const initialState = {
  countries: [],
  filter: "",
  query: "",
  status: "idle",
  error: "",
};

const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    filterRegion(state, action) {
      state.filter = action.payload;
    },
    updateQuery(state, action) {
      state.query = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchCountries.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.countries = action.payload;
        state.status = "idle";
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      }),
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
      return countries.filter((country) => {
        if (!query) return true;
        if (country.name.toLowerCase().includes(query.toLowerCase()))
          return true;
        return false;
      });
  }
};

export const { filterRegion, updateQuery } = countrySlice.actions;

export default countrySlice.reducer;
