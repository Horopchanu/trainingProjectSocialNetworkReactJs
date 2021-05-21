import { NavLink } from "react-router-dom";
import React from "react";
import classes from "./nav.module.css";
const Nav = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <NavLink
            to="/profile"
            activeClassName={classes.active}
            className={classes.links}
          >
            profile
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/messages"
            activeClassName={classes.active}
            className={classes.links}
          >
            messages
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/news"
            activeClassName={classes.active}
            className={classes.links}
          >
            news
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/users"
            activeClassName={classes.active}
            className={classes.links}
          >
            users
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/music"
            activeClassName={classes.active}
            className={classes.links}
          >
            music
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/settings"
            activeClassName={classes.active}
            className={classes.links}
          >
            settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
