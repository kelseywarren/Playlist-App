import React from 'react';
import './track-style.css';


function Track(props) {

    function passTrack() {
        props.onAdd(props.track);
      }
    
      function passTrackRemove() {
        props.onRemove(props.track);
      }

    function buttonAction() {
      if (props.isSelected) {
        return (
          <button className="button" onClick={passTrackRemove}>
            -
          </button>
        );
      } else {
        return (
          <button className="button" onclick={passTrack}>
            +
          </button>
        );
      }
    }
    
    return (
      <div>
        <div className="song">{props.track.name}</div>
        <span className="artistAlbum"> {props.track.artist} | {props.track.album}</span>
        {buttonAction()}
      </div>
    );
  }
  
  export default Track;
  