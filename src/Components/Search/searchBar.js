import React, { useState } from 'react';

import './searchBar-style.css';

function SearchBar(props) {

    const [input, setInput] = useState('') 

    const handleChange = (e) => { //sets the typed input as the new input state
        setInput(e.target.value)
    }

    const handleClick = () => { //sends search term to prop in App ?? 
        props.onSearch(input)
    } 

    return (
        <div>
            <form className="search">
            <input type="text" onChange={handleChange} placeholder="Search for songs"></input>
            <button className="searchButton" onClick={handleClick}>Search</button>
            </form>
        </div>
    );
};

export default SearchBar;