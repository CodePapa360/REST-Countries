import { configureStore } from "@reduxjs/toolkit";
import countryReducer from "./services/countrySlice";

const store = configureStore({
  reducer: {
    country: countryReducer,
  },
});

export default store;
