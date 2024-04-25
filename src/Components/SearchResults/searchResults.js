import React from 'react';
import './searchResults-style.css';
import Tracklist from '../Tracklist/tracklist';

function SearchResults(props) {

    return (
        <div className="resultsContainer"> 
                <h2>Results</h2>
                <Tracklist /> 
        </div>
    )
};

export default SearchResults;