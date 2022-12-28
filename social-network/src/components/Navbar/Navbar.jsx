import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import FriendItem from "./FriendItem";

export default function Navbar(props) {
  let friendsElements = props.dialogsData.map((friend) => (
    <FriendItem name={friend.name} key={friend.id} photo={friend.photo} />
  ));

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
        </li>
        <li>
          <NavLink className="nav__link " to="/friends">
            <div className="friends__block">
              <p className="friends__block_text">Friends</p>
              {friendsElements}
            </div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
