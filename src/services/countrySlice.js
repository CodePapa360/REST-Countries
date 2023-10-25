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
  filter: "All",
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
      .addCase(fetchCountries.pending, (state) => {
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

  const cleanQuery = query.trim().toLowerCase();

  const filterFunction = (country) => {
    const details = {
      name: country.name.common,
      alpha3Code: country.cca3,
      alpha2Code: country.cca2,
      region: country.region,
    };

    if (query) {
      const check =
        details.name.toLowerCase().includes(cleanQuery) ||
        details.alpha2Code.toLowerCase().includes(cleanQuery) ||
        details.alpha3Code.toLowerCase().includes(cleanQuery);

      if (!check) return false;
    }
    if (filter === "All" || details.region === filter) {
      return true;
    }
    return false;
  };

  return countries.filter(filterFunction);
};

export const { filterRegion, updateQuery } = countrySlice.actions;

export default countrySlice.reducer;
