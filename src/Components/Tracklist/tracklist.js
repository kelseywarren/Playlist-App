import React from 'react';
import './tracklist-style.css'
import Track from '../Track/track';


function Tracklist () {
    return (
        <div className="tracklistContainer">
                <div className="trackItem"> <Track /></div>
                <div className="trackItem"> <Track /></div>
                <div className="trackItem"> <Track /></div>
                <div className="trackItem"> <Track /></div>
                <div className="trackItem"> <Track /></div>
                <div className="trackItem"> <Track /></div>
                <div className="trackItem"> <Track /></div>
                <div className="trackItem"> <Track /></div>
                <div className="trackItem"> <Track /></div>
                <div className="trackItem"> <Track /></div>
        </div>
    )
};

export default Tracklist;