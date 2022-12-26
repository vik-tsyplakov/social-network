import React from "react";
import "./MyPosts.css";
import Post from "./Post/Post";

export default function MyPosts() {
  let postsData = [
    { id: 1, message: "It is my first post", likesCount: "12" },
    { id: 2, message: "I am 28 years old", likesCount: "5" },
    { id: 3, message: "I am learning React", likesCount: "2" },
    { id: 4, message: "How are you?", likesCount: "0" },
  ];

  let postsElements = postsData.map((post) => (
    <Post message={post.message} id={post.id} likesCount={post.likesCount} />
  ));

  return (
    <div className="myPosts">
      <p>My posts</p>
      <div className="newPost">
        <div className="">
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <button>Send</button>
      </div>
      <div className="posts">{postsElements}</div>
    </div>
  );
}
