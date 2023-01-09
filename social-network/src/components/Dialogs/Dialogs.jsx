import React from "react";
import "./Dialogs.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  addMessageActionCreator,
  updateMessageTextActionCreator,
} from "./../../redux/state";

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
    props.dispatch(addMessageActionCreator());
  };

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.dispatch(updateMessageTextActionCreator(text));
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
              ref={newMessageElement}
              cols="30"
              rows="10"
              onChange={onMessageChange}
              value={props.newMessageText}
              placeholder="Enter your message"
            />
            <button onClick={addMessage}>New Message</button>
          </div>
        </div>
      </div>
    </div>
  );
}
