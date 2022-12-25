import React from "react";
import { NavLink } from "react-router-dom";
import "./DialogItem.css";

export default function DialogItem(props) {
  let path = "/dialogs/" + props.id;
  return (
    <div className="dialog__item">
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
}
