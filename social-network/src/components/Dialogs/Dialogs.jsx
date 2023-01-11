import React from "react";
import "./Dialogs.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  addMessageActionCreator,
  updateMessageTextActionCreator,
} from "./../../redux/dialogsReducer";

export default function Dialogs(props) {
  let state = props.store.getState().dialogsPage;
  let dialogsElements = state.dialogsData.map((dialog) => (
    <DialogItem
      name={dialog.name}
      key={dialog.id}
      id={dialog.id}
      photo={dialog.photo}
    />
  ));

  let messagesElements = state.messagesData.map((message) => (
    <Message message={message.message} key={message.id} id={message.id} />
  ));

  let newMessageElement = state.newMessageElement;

  let addMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  };

  let onMessageChange = (e) => {
    let text = e.target.value;
    props.store.dispatch(updateMessageTextActionCreator(text));
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
              value={state.newMessageText}
              placeholder="Enter your message"
            />
            <button onClick={addMessage}>New Message</button>
          </div>
        </div>
      </div>
    </div>
  );
}
