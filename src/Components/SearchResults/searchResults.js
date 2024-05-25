import React from 'react';
import './searchResults-style.css';
import Tracklist from '../Tracklist/tracklist';

function SearchResults(props) {

    function searchPlaceholder() {
        if(props.searchResults <= 0){
            return (
                <div>
                <h2 className="searchPlaceholder">Discover songs</h2>
                <p className="searchPlaceholderSub">searched songs will be listed here</p>
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