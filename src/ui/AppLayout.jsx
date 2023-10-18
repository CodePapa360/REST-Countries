import Header from "../ui/Header";
import Attribution from "../components/Attribution";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "../ui/Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="mx-auto flex min-h-screen flex-col">
      {isLoading && <Loader />}

      <Header />

      <main className="dark:bg-cmVeryDarkBlue">
        <Outlet />
      </main>

      <Attribution />
    </div>
  );
}

export default AppLayout;
