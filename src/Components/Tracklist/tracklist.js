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
                isSelected={props.isSelected}
                onRemove={props.onRemove}
              />
            )
          })}
        </div>
      );
};

export default Tracklist;