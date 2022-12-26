import React from "react";
import "./Post.css";
import avatar from "./../../../../img/mainContent/avatar.png";

export default function Post(props) {
  return (
    <div className="post">
      <img className="post__avatar" src={avatar} alt="user" />
      <div className="post__container">
        <p className="post__text">{props.message}</p>
        <p className="post__likesCount">likes {props.likesCount}</p>
      </div>
    </div>
  );
}
