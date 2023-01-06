import React from "react";
import "./Dialogs.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

export default function Dialogs(props) {
  let dialogsElements = props.dialogsData.map((dialog) => (
    <DialogItem
      name={dialog.name}
      key={dialog.id}
      id={dialog.id}
      photo={dialog.photo}
    />
  ));

  let messagesElements = props.messagesData.map((message) => (
    <Message message={message.message} key={message.id} id={message.id} />
  ));

  let newMessageElement = React.createRef();

  let addMessage = () => {
    let action = { type: "ADD-MESSAGE" };
    newMessageElement.current.value = "";
    props.dispatch(action);
  };

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    let action = { type: "UPDATE-MESSAGE-TEXT", newMessage: text };
    props.dispatch(action);
  };

  return (
    <div>
      <p>Dialogs</p>
      <div className="dialogs">
        <div className="dialogs__items">{dialogsElements}</div>
        <div className="dialogs__messages">
          {messagesElements}
          <div className="">
            <textarea
              name=""
              ref={newMessageElement}
              cols="30"
              rows="10"
              onChange={onMessageChange}
              value={props.newMessageText}
            />
            <button onClick={addMessage}>New Message</button>
          </div>
        </div>
      </div>
    </div>
  );
}
