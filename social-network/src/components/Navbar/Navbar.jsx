import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink to="/profile"> Profile</NavLink>
        </li>
        <li>
          <NavLink to="/dialogs"> Messages</NavLink>
        </li>
        <li>
          <NavLink to="/news"> News</NavLink>
        </li>
        <li>
          <NavLink to="/music"> Music</NavLink>
        </li>
        <li>
          <NavLink to="/setting"> Setting</NavLink>
        </li>
      </ul>
    </nav>
  );
}
