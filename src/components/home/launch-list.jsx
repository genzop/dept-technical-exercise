import React, { useContext } from "react";

import LaunchesContext from "../../store/launches-context";

import LaunchItem from "./launch-item";

import classes from "./launch-list.module.scss";

const LaunchList = () => {
  const launchContext = useContext(LaunchesContext);

  return (
    <div className={classes.launchList}>
      <div className={classes.total}>Total ({launchContext.total})</div>
      <div className={classes.list}>
        {launchContext.list.map((launch, index) => (
          <LaunchItem key={index} item={launch} />
        ))}
      </div>
    </div>
  );
};

export default LaunchList;
