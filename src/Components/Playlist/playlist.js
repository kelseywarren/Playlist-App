import React from 'react';
import './playlist-style.css';
import Tracklist from '../Tracklist/tracklist';

function Playlist(props) {
    
    return (
        <div className="playlistContainer">
            <div className="playlist">
                <h2>Playlist</h2>
                <Tracklist 
                onRemove={props.onRemove}
                isSelected={true}
                />
            </div>
            <button className="saveButton">Save to Spotify</button>
        </div>
    )
};

export default Playlist;