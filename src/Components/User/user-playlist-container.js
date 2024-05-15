import React from "react";
import UserPlaylists from "./userPlaylists";

function UserPlaylistContainer(props) {

    <div>
        {props.container.map((plist) => {
            return (
                <UserPlaylists
                plist={plist}
                 />
            )
        })}
    </div>
    
  
}

export default UserPlaylistContainer;
