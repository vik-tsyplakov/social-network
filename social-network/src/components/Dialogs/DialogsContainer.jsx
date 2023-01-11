import React from "react";
import Dialogs from "./Dialogs";
import {
  addMessageActionCreator,
  updateMessageTextActionCreator,
} from "../../redux/dialogsReducer";
import StoreContext from "../../StoreContext";

export default function DialogsContainer(props) {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().dialogsPage;
        let addMessage = () => {
          store.dispatch(addMessageActionCreator());
        };
        let onMessageChange = (text) => {
          store.dispatch(updateMessageTextActionCreator(text));
        };
        return (
          <Dialogs
            updateMessageText={onMessageChange}
            addMessage={addMessage}
            dialogsPage={state}
          />
        );
      }}
    </StoreContext.Consumer>
  );
}
