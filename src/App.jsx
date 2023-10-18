import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import CountryDetails from "./components/CountryDetails";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: "/",
        element: <Home />,
        // loader: countriesLoader,
        errorElement: <Error />,
      },
      {
        path: "/country/:countryId",
        element: <CountryDetails />,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
