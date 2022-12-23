import React from "react";
import "./MyPosts.css";
import Post from "./Post/Post";

export default function MyPosts() {
  return (
    <div className="myPosts">
      <div className="newPost">New post</div>
      <Post />
    </div>
  );
}
