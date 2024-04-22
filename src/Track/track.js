import React from 'react';
import './track-style.css';

function Track() {
    return (
       <div className="trackContainer">
            <span className="songTitle">Song</span><br></br>
            <span className="songArtist">Artist |</span><span className="songAlbum">Album</span>
       </div> 
    )
}

export default Track;