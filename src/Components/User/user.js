import React from "react";
import "./user-style.css";

function UserProfile(props) {
  return (
    <div className="userProfile">
      <span className="userName">Logged in: {props.userName}</span>
      <br></br>
      <span>
        <a className="userLink" href={props.userLink}>
          Spotify Profile
        </a>
      </span>
    </div>
  );
}

export default UserProfile;

