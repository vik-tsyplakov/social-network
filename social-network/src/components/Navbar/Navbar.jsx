import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <a href="/profile"> Profile</a>
        </li>
        <li>
          <a href="/dialogs"> Messages</a>
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
