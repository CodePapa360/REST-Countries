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

  // if (!countries.length) return [];

  const filterFunction = (country) => {
    if (query) {
      const check =
        country.name.toLowerCase().includes(query.toLowerCase()) ||
        country.alpha2Code.toLowerCase().includes(query.toLowerCase()) ||
        country.alpha3Code.toLowerCase().includes(query.toLowerCase());

      if (!check) return false;
    }
    if (filter === "All" || country.region === filter) {
      return true;
    }
    return false;
  };

  return countries.filter(filterFunction);
};

export const { filterRegion, updateQuery } = countrySlice.actions;

export default countrySlice.reducer;
