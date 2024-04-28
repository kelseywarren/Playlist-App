import React from 'react';
import './tracklist-style.css'
import Track from '../Track/track';



function Tracklist (props) {
      return (
        <div className="tracklistContainer">
          {props.tracks?.map((track) => {
            return (
              <Track
                key={track.id}
                track={track}
                onAdd={props.onAdd}
                onRemove={props.onRemove}
                isSelected={props.isSelected}
              />
            )
          })}
        </div>
      );
};

export default Tracklist;