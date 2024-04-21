import React from 'react';
import './playlist-style.css';
import Tracklist from '../Tracklist/tracklist';

function Playlist() {
    
    return (
        <div className="playlistContainer">
            <div className="playlist">
                <h2>Playlist</h2>
                <Tracklist />
            </div>
        </div>
    )
};

export default Playlist;