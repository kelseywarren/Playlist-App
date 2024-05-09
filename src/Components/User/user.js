import React from "react";
import "./user-style.css";

function userProfile(props) {
  return (
    <div className="userProfile">
      <span className="userName">{props.userName}</span>
      <span className="userImg">{props.userImg}</span>
    </div>
  );
}

export default userProfile;
