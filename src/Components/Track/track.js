import React from 'react';
import './track-style.css';


function Track(props) {

    function buttonAction() {
      if (props.isSelected) {
        return (
          <button className="button" onClick={passTrackRemove}>
            -
          </button>
        );
      } else {
        return (
          <button className="button" onClick={passTrack}>
            +
          </button>
        );
      }
    }

    function passTrack() {
      props.onAdd(props.track);
    }
  
    function passTrackRemove() {
      props.onRemove(props.track);
    }

    return (
      <div className="trackItem">
        <span className="trackPreview"><audio controls className="audioPlayer"src={props.track.preview_url}/></span>
        <div className="song">{props.track.name}</div>
        <div><img className="trackImg" src={props.track.img}></img></div>
        <div className="artistAlbum"> {props.track.artist} | {props.track.album}
        {buttonAction()}
        </div>
      </div>
    );
  }
  
  export default Track;
  