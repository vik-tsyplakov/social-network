import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Data for App
let postsData = [
  { id: 1, message: "It is my first post", likesCount: "12" },
  { id: 2, message: "I am 28 years old", likesCount: "5" },
  { id: 3, message: "I am learning React", likesCount: "2" },
  { id: 4, message: "How are you?", likesCount: "0" },
];

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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App
      postsData={postsData}
      dialogsData={dialogsData}
      messagesData={messagesData}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
