import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import "./Profile.css";
import bird from "./../../img/mainContent/bird.jpg";
import avatar from "./../../img/mainContent/avatar.png";

export default function Profile() {
  return (
    <div className="content">
      <div>
        <img src={bird} className="imgContent" alt="content" />
      </div>
      <div className="avatarAndPosts">
        <div className="avatarAndDescription">
          <img src={avatar} className="avatar" alt="avatar" />
          <div className="description">
            <p>Name Surname</p>
            <p>Date of Birth: 2 january</p>
            <p>City: Kyiv</p>
            <p>Education: KPI'18</p>
            <p>
              Web Site:
              <a href="https://github.com/vik-tsyplakov">
                github.com/vik-tsyplakov
              </a>
            </p>
          </div>
        </div>
        <MyPosts />
      </div>
    </div>
  );
}
