import React, { useContext } from "react";

import LaunchesContext from "../../store/launches-context";

import classes from "./filters.module.scss";

const Filters = () => {
  const launchContext = useContext(LaunchesContext);

  return (
    <div className={classes.filters}>
      <input />
    </div>
  );
};

export default Filters;
