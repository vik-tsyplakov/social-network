import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  addPost,
  updateNewPostText,
  addMessage,
  updateMessageText,
} from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById("root"));
export let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App
        state={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
        addMessage={addMessage}
        updateMessageText={updateMessageText}
      />
    </React.StrictMode>
  );
};
