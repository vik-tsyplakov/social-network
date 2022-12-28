import React from "react";
import { NavLink } from "react-router-dom";
import "./DialogItem.css";

export default function DialogItem(props) {
  let path = "/dialogs/" + props.id;
  return (
    <div>
      <NavLink className={"dialog__item"} to={path}>
        <img src={props.photo} alt="friend" />
        <p>{props.name}</p>
      </NavLink>
    </div>
  );
}
