import React, { useContext } from "react";

import LaunchesContext from "../../store/launches-context";

import classes from "./filters.module.scss";

const Filters = () => {
  const launchContext = useContext(LaunchesContext);

  const onChangeFilter = (event) => {
    const value = event.currentTarget.value;
    launchContext.updateFilter(value.toLowerCase());
  };

  return (
    <div className={classes.filters}>
      <input value={launchContext.filter} onChange={onChangeFilter} />
    </div>
  );
};

export default Filters;
