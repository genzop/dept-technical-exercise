import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./styles/globals.scss";
import HomePage from "./pages/home";
import FavouritesPage from "./pages/favourites";
import LaunchPage from "./pages/launch";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/favourites",
      element: <FavouritesPage />,
    },
    {
      path: "/launch/:launchId",
      element: <LaunchPage />,
      loader: async ({ request, params }) => {
        return params;
      },
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
