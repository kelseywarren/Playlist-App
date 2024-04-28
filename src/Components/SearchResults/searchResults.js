import React from 'react';
import './searchResults-style.css';
import Tracklist from '../Tracklist/tracklist';

function SearchResults(props) {

    return (
        <div className="resultsContainer"> 
                <h2>{props.title}</h2>
                <Tracklist 
                tracks={props.searchResults}
                isSelected={false}
                addTrack={props.addTrack}
                onAdd={props.onAdd}
                /> 
        </div>
    )
};

export default SearchResults;