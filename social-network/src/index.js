import "./index.css";
import React from "react";
import store from "./redux/reduxStore";
import ReactDOM from "react-dom/client";
import App from "./App";
import StoreContext from "./StoreContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <StoreContext.Provider value={store}>
        <App />
      </StoreContext.Provider>
    </React.StrictMode>
  );
};

rerenderEntireTree(store.getState());
store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});
