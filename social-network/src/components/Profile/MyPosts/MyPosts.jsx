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
    let text = newPostElement.current.value;
    alert(text);
  };

  return (
    <div className="myPosts">
      <p>My posts</p>
      <div className="newPost">
        <div className="">
          <textarea name="" ref={newPostElement} cols="30" rows="10"></textarea>
        </div>
        <button onClick={addPost}>Add post</button>
      </div>
      <div className="posts">{postsElements}</div>
    </div>
  );
}
