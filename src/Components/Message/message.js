import React from 'react';
import './message-style.css';

function Success(props) {
    if(props.success)
    return (
      <div className="successBox">
        <p className="successMessage">"Playlist Saved! View Spotify profile to listen"</p>
      </div>
    );
  };

export default Success;