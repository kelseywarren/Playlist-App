import React from 'react';
import './tracklist-style.css'
import Track from '../Track/track';


function Tracklist (props) {

    const array = [ //mock data
        "track1",
        "track2",
        "track3",
        "track4",
        "track5",
        "track6",
        "track7",
        "track8",
        "track9",
        "track10",
        "track11",
        "track12",
        "track13",
        "track14",
        "track15",
        "track16",
        "track17",
        "track18",
        "track19",
        "track20",
      ];

      return (
        <div className="tracklistContainer">
          {array.map((track) => {
            return (
              <Track
                key={track}
                track={track}
                onAdd={props.onAdd}
                isSelected={props.isSelected}
                onRemove={props.onRemove}
            
              />
            );
          })}
        </div>
      );
};

export default Tracklist;