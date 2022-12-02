import React from "react";

import { LaunchesContextProvider } from "./../store/launches-context";

import Home from "./../components/home/index";
import Navbar from "./../components/ui/navbar";

const HomePage = () => {
  return (
    <LaunchesContextProvider>
      <Navbar />
      <Home />
    </LaunchesContextProvider>
  );
};

export default HomePage;
