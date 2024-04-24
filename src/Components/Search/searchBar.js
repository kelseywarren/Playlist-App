import React from 'react';

import './searchBar-style.css';

function SearchBar() {

    return (
        <div>
            <form className="search">
            <input type="text" placeholder="Search for songs"></input>
            </form>
        </div>
    )
};

export default SearchBar;