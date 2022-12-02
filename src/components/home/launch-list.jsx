import React, { useContext, useEffect, useState } from "react";

import LaunchesContext from "../../store/launches-context";

import LaunchItem from "./launch-item";

import classes from "./launch-list.module.scss";

const LaunchList = () => {
  const launchContext = useContext(LaunchesContext);

  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let nList = [...launchContext.list].filter(
      (x) =>
        (launchContext.section === "all" || x.favourite) &&
        (launchContext.filter === "" ||
          x.mission_name.includes(launchContext.filter))
    );

    setList(nList);
    setTotal(nList.length);
  }, [launchContext.list, launchContext.section, launchContext.filter]);

  return (
    <div className={classes.launchList}>
      <div className={classes.total}>Total ({total})</div>
      <div className={classes.list}>
        {list.map((launch, index) => (
          <LaunchItem key={index} item={launch} />
        ))}
      </div>
    </div>
  );
};

export default LaunchList;
