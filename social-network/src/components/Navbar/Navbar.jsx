import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <a href=""> Profile</a>
        </li>
        <li>
          <a href=""> Messages</a>
        </li>
        <li>
          <a href=""> News</a>
        </li>
        <li>
          <a href=""> Music</a>
        </li>
        <li>
          <a href=""> Setting</a>
        </li>
      </ul>
    </nav>
  );
}
