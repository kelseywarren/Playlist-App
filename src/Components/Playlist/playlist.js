import React from 'react';
import './playlist-style.css';
import Tracklist from '../Tracklist/tracklist';


function Playlist(props) {

    const handleNameChange = (e) => {
        props.onNameChange(e.target.value)
    }
    
    function playlistPlaceholder() {
        if(props.playlistTracks <= 0) {
            return (
            <div>
                <h2 className="playlistPlaceholder">Add songs to start building playlist</h2>
            </div>
            )
        }
    }

    function playlistNameInput() {
        if(props.playlistTracks.length > 0) {
            return (
                <h2><input className="playlistHeading" defaultValue={props.playlistName} onChange={handleNameChange}></input></h2>
            )
        }
    }

    function showSaveButton() {
        if(props.playlistTracks.length > 0) {
            return (
                <button className="saveButton" onClick={props.onSave}>Save to Spotify</button>
            )
        }
    }

    return (
        <div className="playlistContainer">
            <div className="playlist">
                {playlistPlaceholder()}
                {playlistNameInput()}
                <Tracklist 
                tracks={props.playlistTracks}
                isSelected={true}
                onRemove={props.onRemove}/>
            </div>
            <div>{showSaveButton()}</div>
        </div>
    )
};

export default Playlist;
