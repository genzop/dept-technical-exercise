import React, { useContext, useState } from "react";
import { BsStar, BsStarFill } from "react-icons/bs";

import LaunchesContext from "../../store/launches-context";
import { unixDateToString } from "./../../services/dates";

import classes from "./launch-item.module.scss";

const LaunchItem = (props) => {
  const { item } = props;

  const launchContext = useContext(LaunchesContext);

  const onClickFavourite = () => {
    launchContext.toggleFavourite(item);
  };

  return (
    <div className={classes.launchItem}>
      <div className={classes.image}></div>
      <div className={classes.data}>
        <div className={classes.name}>{item.mission_name}</div>
        <div className={classes.details}>{item.details}</div>
        <div className={classes.row}>
          <div className={classes.date}>
            {unixDateToString(item.launch_date_unix)}
          </div>
          <div className={classes.favourite} onClick={onClickFavourite}>
            {!item.favourite && <BsStar />}
            {item.favourite && <BsStarFill />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchItem;
