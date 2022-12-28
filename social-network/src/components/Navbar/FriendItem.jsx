import React from "react";
import { NavLink } from "react-router-dom";
import "./FriendItem.css";

export default function FriendItem(props) {
  let path = "/dialogs/" + props.name;
  return (
    <div className="friend__item">
      <NavLink to={path}>
        <img src={props.photo} alt="friend" />
        <p>{props.name}</p>
      </NavLink>
    </div>
  );
}
