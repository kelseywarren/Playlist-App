import React from 'react';
import './searchResults-style.css';
import Tracklist from '../Tracklist/tracklist';

function SearchResults(props) {

    return (
        <div className="resultsContainer"> 
                <h2>{props.title}</h2>
                <Tracklist 
                isSelected={false}
                onAdd={props.onAdd}
                /> 
        </div>
    )
};

export default SearchResults;