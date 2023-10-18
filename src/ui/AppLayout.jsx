import Header from "../ui/Header";
import Attribution from "../components/Attribution";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="mx-auto flex min-h-screen flex-col">
      <Header />

      <main className="dark:bg-cmVeryDarkBlue">
        <Outlet />
      </main>

      <Attribution />
    </div>
  );
}

export default AppLayout;
