import React from "react";
import "./MyPosts.css";
import Post from "./Post/Post";

export default function MyPosts() {
  return (
    <div className="myPosts">
      <div className="newPost">New post</div>
      <Post message="It is my first post" likesCount={12} />
      <Post message="I am 28 years old" likesCount={5} />
      <Post message="I am learning React" likesCount={2} />
      <Post message="How are you?" likesCount={0} />
    </div>
  );
}
