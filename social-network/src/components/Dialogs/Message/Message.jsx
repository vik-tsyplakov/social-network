import React from "react";
import "./Message.css";

export default function Message(props) {
  return <div className="dialog__message">{props.message}</div>;
}
