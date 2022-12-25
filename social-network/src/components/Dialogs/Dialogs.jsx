import React from "react";
import "./Dialogs.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

export default function Dialogs(props) {
  return (
    <div>
      <p>Dialogs</p>
      <div className="dialogs">
        <div className="dialogs__items">
          <DialogItem name="Nick" id="1" />
          <DialogItem name="John" id="2" />
          <DialogItem name="Ivan" id="3" />
          <DialogItem name="Anna" id="4" />
          <DialogItem name="Alex" id="5" />
          <DialogItem name="Harry" id="6" />
        </div>
        <div className="dialogs__messages">
          <Message message="Hi!" />
          <Message message="What`s up?" />
          <Message message="Where are you?" />
        </div>
      </div>
    </div>
  );
}
