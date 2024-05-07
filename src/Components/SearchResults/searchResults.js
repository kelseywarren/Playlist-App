import React from 'react';
import './searchResults-style.css';
import Tracklist from '../Tracklist/tracklist';

function SearchResults(props) {

    function searchPlaceholder() {
        if(props.searchResults <= 0){
            return (
                <div className="searchPlaceholder">
                <h2>Discover songs and create a playlist</h2>
                </div>
            )
        }
    }
    return (
        <div className="resultsContainer"> 
                {searchPlaceholder()}
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