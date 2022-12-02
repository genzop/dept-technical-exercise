import React from "react";
import { BsStar, BsStarFill } from "react-icons/bs";

import classes from "./launch-item.module.scss";
import { unixDateToString } from "./../../services/dates";

const LaunchItem = (props) => {
  const { item } = props;

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
          <div className={classes.favourite}>
            <BsStar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchItem;
