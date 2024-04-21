import React from 'react';
import './results-style.css';
import Tracklist from '../Tracklist/tracklist';

function ResultList() {

    return (
        <div className="result-container">
            <div className="list">
                <h2>Results</h2>
                <Tracklist />
            </div>
        </div>
    )
};

export default ResultList;