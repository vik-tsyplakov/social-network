import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink className="nav__link" to="/profile">
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink className="nav__link" to="/dialogs">
            Messages
          </NavLink>
        </li>
        <li>
          <NavLink className="nav__link" to="/news">
            News
          </NavLink>
        </li>
        <li>
          <NavLink className="nav__link" to="/music">
            Music
          </NavLink>
        </li>
        <li>
          <NavLink className="nav__link" to="/setting">
            Setting
          </NavLink>
          <li>
            <NavLink className="nav__link" to="/friends">
              Friends
            </NavLink>
          </li>
        </li>
      </ul>
    </nav>
  );
}
