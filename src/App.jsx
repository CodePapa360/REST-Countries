import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home, { loader as countriesLoader } from "./components/Home";
import CountryDetails from "./components/CountryDetails";
import AppLayout from "./ui/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: countriesLoader,
      },
      {
        path: "/country/:countryId",
        element: <CountryDetails />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
