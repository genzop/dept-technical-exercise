import React, { useContext, useEffect, useState } from "react";

import { getLaunches } from "./../../services/spacex";
import LaunchesContext from "../../store/launches-context";

import LaunchList from "./launch-list";
import Header from "./header";

import classes from "./index.module.scss";

const Home = () => {
  const launchContext = useContext(LaunchesContext);

  useEffect(() => {
    async function getData() {
      const data = await getLaunches();
      launchContext.updateList(data);
    }

    getData();
  }, []);

  return (
    <div className={classes.home}>
      <Header />
      <LaunchList />
    </div>
  );
};

export default Home;
