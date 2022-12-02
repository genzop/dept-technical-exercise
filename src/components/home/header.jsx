import React, { useContext } from "react";

import LaunchesContext from "../../store/launches-context";

import classes from "./header.module.scss";

const Header = () => {
  const launchContext = useContext(LaunchesContext);

  const sections = [
    { value: "all", text: "All" },
    { value: "favourites", text: "Favourites" },
  ];

  const onClickSection = (section) => {
    launchContext.updateSection(section.value);
  };

  return (
    <div className={classes.header}>
      <div className={classes.title}>Launches</div>
      <ul className={classes.menu}>
        {sections.map((section, index) => (
          <li
            key={index}
            onClick={() => onClickSection(section)}
            className={`${classes.section} ${
              section.value === launchContext.section ? classes.active : ""
            }`}
          >
            {section.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
