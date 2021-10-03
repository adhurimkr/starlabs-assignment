import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink activeClassName="active" exact to="/">
            Homepage
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" exact to="/teams">
            Teams
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
