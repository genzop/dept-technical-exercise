import React from "react";
import { Link } from "react-router-dom";

import logo from "./../../assets/images/logo.png";

import classes from "./navbar.module.scss";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <Link to="/">
        <img className={classes.logo} src={logo} alt="logo" />
      </Link>
    </div>
  );
};

export default Navbar;
