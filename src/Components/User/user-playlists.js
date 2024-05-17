import React from "react";
import "./user-playlists-style.css";

function UserPlaylists(props) {
  return (
  <div className="userPlaylists">
    <div><img className="playlistImg" src={props.plist.image}></img><br></br>{props.plist.playlistName}</div>
    <div className="playlistTrack">{props.plist.trackCount} tracks</div>
</div>
  );
};

export default UserPlaylists;
