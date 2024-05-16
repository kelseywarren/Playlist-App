import React from "react";
import "./user-playlists-style.css";

function UserPlaylists(props) {
  return (
  <div className="userPlaylists">
    <div>{props.plist.playlistName}</div>
    <div>{props.plist.trackCount} tracks</div>
    <div>{props.plist.image}</div>
</div>
  );
};

export default UserPlaylists;
