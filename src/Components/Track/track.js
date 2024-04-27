import React from 'react';
import './track-style.css';


function Track(props) {

    function addTrack() {
        props.onAdd(props.track);
      }
    
      function removeTrack() {
        props.onRemove(props.track);
      }

    function buttonAction() {
      if (props.isSelected) {
        return (
          <button className="button" onClick={removeTrack}>
            -
          </button>
        );
      } else {
        return (
          <button className="button" onclick={addTrack}>
            +
          </button>
        );
      }
    }
  
    function addTrack() {
      props.onAdd(props.track);
    }
  
    function removeTrack() {
      props.onRemove(props.track);
    }
  
    return (
      <div>
        <div className="song">{props.track}</div>
        <span className="artistAlbum"> artist | album</span>
        {buttonAction()}
      </div>
    );
  }
  
  export default Track;
  