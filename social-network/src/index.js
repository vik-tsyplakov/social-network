import "./index.css";
import React from "react";
import store from "./redux/state";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App
        state={state}
        addPost={store.addPost.bind(store)}
        updateNewPostText={store.updateNewPostText.bind(store)}
        addMessage={store.addMessage.bind(store)}
        updateMessageText={store.updateMessageText.bind(store)}
      />
    </React.StrictMode>
  );
};
rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);
