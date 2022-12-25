import React from "react";
import "./MyPosts.css";
import Post from "./Post/Post";

export default function MyPosts() {
  return (
    <div className="myPosts">
      <p>My posts</p>
      <div className="newPost">
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button>Send</button>
      </div>
      <Post message="It is my first post" likesCount={12} />
      <Post message="I am 28 years old" likesCount={5} />
      <Post message="I am learning React" likesCount={2} />
      <Post message="How are you?" likesCount={0} />
    </div>
  );
}
