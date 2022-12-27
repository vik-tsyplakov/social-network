import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import "./Profile.css";
import bird from "./../../img/mainContent/bird.jpg";

export default function Profile() {
  let postsData = [
    { id: 1, message: "It is my first post", likesCount: "12" },
    { id: 2, message: "I am 28 years old", likesCount: "5" },
    { id: 3, message: "I am learning React", likesCount: "2" },
    { id: 4, message: "How are you?", likesCount: "0" },
  ];

  return (
    <div>
      <div>
        <img src={bird} className="imgContent" alt="content" />
      </div>
      <div>
        <ProfileInfo />
        <MyPosts postsData={postsData} />
      </div>
    </div>
  );
}
