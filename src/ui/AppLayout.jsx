import Header from "../components/Header";
import Attribution from "../components/Attribution";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../ui/Loader";
import { useEffect } from "react";
import { fetchCountries } from "../services/countrySlice";

function AppLayout() {
  // const dispatch = useDispatch();

  // useEffect(
  //   function () {
  //     dispatch(fetchCountries());
  //   },
  //   [dispatch],
  // );

  const isLoading = useSelector((state) => state.country.status !== "idle");
  return (
    <div className="mx-auto flex min-h-screen flex-col">
      {isLoading && <Loader />}

      <Header />

      <main className="grow dark:bg-cmVeryDarkBlue">
        <Outlet />
      </main>

      <Attribution />
    </div>
  );
}

export default AppLayout;
