import React from "react";
import avatar from "./../../../img/mainContent/avatar.png";
import "./ProfileInfo.css";

export default function ProfileInfo() {
  return (
    <div className="profileInfo">
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
  );
}
