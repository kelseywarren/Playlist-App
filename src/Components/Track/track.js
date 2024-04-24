import React from 'react';
import './track-style.css';


function Track() {

    return (
       <div className="trackContainer">
            <span className="songTitle">Song</span><br></br>
            <span className="songArtist">Artist |</span><span className="songAlbum"> Album</span>
            <button type='button' className="addButton">+</button>
       </div> 
    )
}

export default Track;