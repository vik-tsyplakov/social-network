import React from "react";
import "./Post.css";
import avatar from "./../../../../img/mainContent/avatar.png";

export default function Post(props) {
  return (
    <div className="post">
      <img className="post__avatar" src={avatar} alt="user photo" />
      <div className="post__container">
        <p className="post__text">{props.message}</p>
        <p className="post__likesCount">like {props.likesCount}</p>
      </div>
    </div>
  );
}
