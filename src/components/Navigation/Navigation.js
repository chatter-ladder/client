import React from "react";

import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <nav className={classes.Navigation}>
      <ul>
        <li>
          <NavLink activeClassName={classes.active} to="/" exact>
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to="profile">
            PROFILE
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to="flashcards">
            FLASHCARDS
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to="vocabulary">
            VOCABULARY
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to="login">
            LOGIN
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to="register">
            SIGNUP
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to="logout">
            LOGOUT
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
