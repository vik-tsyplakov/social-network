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

  return (
    <div>
      <p>Dialogs</p>
      <div className="dialogs">
        <div className="dialogs__items">
          <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
          <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
          <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
          <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
          <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
          <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />
        </div>
        <div className="dialogs__messages">
          <Message message={messagesData[0].message} id={messagesData[0].id} />
          <Message message={messagesData[1].message} id={messagesData[1].id} />
          <Message message={messagesData[2].message} id={messagesData[2].id} />
          <Message message={messagesData[3].message} id={messagesData[3].id} />
          <Message message={messagesData[4].message} id={messagesData[4].id} />
          <Message message={messagesData[5].message} id={messagesData[5].id} />
        </div>
      </div>
    </div>
  );
}
