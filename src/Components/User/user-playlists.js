import React from "react";

function UserPlaylists(props) {
  return (
  <div className="userPlaylists">
    <div>{props.container.playlist_name}</div>
    <div>{props.container.track_count}</div>
    <div>{props.container.info}</div>
</div>
  );
};

export default UserPlaylists;
