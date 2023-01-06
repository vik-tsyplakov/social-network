import React from "react";
import "./MyPosts.css";
import Post from "./Post/Post";

export default function MyPosts(props) {
  let postsElements = props.postsData.map((post) => (
    <Post
      message={post.message}
      key={post.id}
      id={post.id}
      likesCount={post.likesCount}
    />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    let action = { type: "ADD-POST" };
    props.dispatch(action);
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = { type: "UPDATE-NEW-POST-TEXT", newText: text };
    props.dispatch(action);
  };

  return (
    <div className="myPosts">
      <p>My posts</p>
      <div className="newPost">
        <div className="">
          <textarea
            ref={newPostElement}
            cols="30"
            rows="10"
            onChange={onPostChange}
            value={props.newPostText}
          />
        </div>
        <button onClick={addPost}>Add post</button>
      </div>
      <div className="posts">{postsElements}</div>
    </div>
  );
}
