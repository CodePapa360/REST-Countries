import Header from "../components/Header";
import Attribution from "../components/Attribution";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../ui/Loader";

function AppLayout() {
  const isLoading = useSelector((state) => state.country.status !== "idle");

  return (
    <div className="mx-auto flex min-h-screen flex-col">
      {isLoading && <Loader />}

      <Header />

      <main className="grow bg-cmVeryLightGray pb-4 dark:bg-cmVeryDarkBlue">
        <h1 className="sr-only">
          REST Countries API with color theme switcher
        </h1>
        <Outlet />
      </main>

      <Attribution />
    </div>
  );
}

export default AppLayout;
