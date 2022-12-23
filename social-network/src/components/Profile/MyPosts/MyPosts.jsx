import React from "react";
import "./MyPosts.css";
import Post from "./Post/Post";

export default function MyPosts() {
  return (
    <div className="myPosts">
      <div className="newPost">New post</div>
      <Post message="It is my first post" />
      <Post message="I am 28 years old" />
      <Post message="I am learning React" />
      <Post message="How are you?" />
    </div>
  );
}
