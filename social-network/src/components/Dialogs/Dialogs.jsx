import React from "react";
import "./Dialogs.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

export default function Dialogs(props) {
  let dialogsData = [
    { id: 1, name: "Nick" },
    { id: 2, name: "John" },
    { id: 3, name: "Ivan" },
    { id: 4, name: "Anna" },
    { id: 5, name: "Alex" },
    { id: 6, name: "Harry" },
  ];

  let messagesData = [
    { id: 1, message: "Hi!" },
    { id: 2, message: "What`s up?" },
    { id: 3, message: "Where are you?" },
    { id: 4, message: "Ok" },
    { id: 5, message: "Have a good day!" },
    { id: 6, message: "I like it" },
  ];

  let dialogsElements = dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = messagesData.map((message) => (
    <Message message={message.message} id={message.id} />
  ));

  return (
    <div>
      <p>Dialogs</p>
      <div className="dialogs">
        <div className="dialogs__items">{dialogsElements}</div>
        <div className="dialogs__messages">{messagesElements}</div>
      </div>
    </div>
  );
}
