import React from "react";
import Dialogs from "./Dialogs";
import {
  addMessageActionCreator,
  updateMessageTextActionCreator,
} from "../../redux/dialogsReducer";

export default function DialogsContainer(props) {
  let state = props.store.getState().dialogsPage;

  let addMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  };

  let onMessageChange = (text) => {
    props.store.dispatch(updateMessageTextActionCreator(text));
  };

  return (
    <Dialogs
      updateMessageText={onMessageChange}
      addMessage={addMessage}
      dialogsPage={state}
    />
  );
}
