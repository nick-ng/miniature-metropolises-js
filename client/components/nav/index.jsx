import React from "react";

import Header from "../header";
import NavLink from "./nav-link";

import css from "./styles.css";

const Nav = () => (
  <div className={css.navContainer}>
    <Header />
    <NavLink icon="fa-home" to="/" exact>
      Home
    </NavLink>
  </div>
);

export default Nav;
