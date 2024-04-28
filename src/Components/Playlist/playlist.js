import React from 'react';
import './playlist-style.css';
import Tracklist from '../Tracklist/tracklist';

function Playlist(props) {

    const handleNameChange = (e) => {
        props.onNameChange(e.target.value)
    }
    
    return (
        <div className="playlistContainer">
            <div className="playlist">
                <h2><input className="playlistHeading" defaultValue={props.playlistName} onChange={handleNameChange}></input></h2>
                <Tracklist 
                tracks={props.playlistTracks}
                isSelected={true}
                onRemove={props.onRemove}/>
            </div>
            <button className="saveButton">Save to Spotify</button>
        </div>
    )
};

export default Playlist;
