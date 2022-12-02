import React, { useContext } from "react";
import { FiSearch } from "react-icons/fi";

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
      <div className={classes.name}>
        <FiSearch />
        <input
          placeholder="Search all launches..."
          value={launchContext.filter}
          onChange={onChangeFilter}
        />
      </div>
    </div>
  );
};

export default Filters;
