import React from "react";
import UserPlaylists from "./user-playlists";
import './user-playlist-container-style.css';



function UserPlaylistContainer(props) {
    return (
    <div className="userPlaylistContainer">
        {props.container.map((plist) => {
            return (
                <UserPlaylists
                key={plist.id}
                plist={plist}
                 />
            )
        })}
    </div>
    );
  
}

export default UserPlaylistContainer;
