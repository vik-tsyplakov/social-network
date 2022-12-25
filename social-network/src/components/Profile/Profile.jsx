import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import "./Profile.css";
import bird from "./../../img/mainContent/bird.jpg";

export default function Profile() {
  return (
    <div>
      <div>
        <img src={bird} className="imgContent" alt="content" />
      </div>
      <div>
        <ProfileInfo />
        <MyPosts />
      </div>
    </div>
  );
}
