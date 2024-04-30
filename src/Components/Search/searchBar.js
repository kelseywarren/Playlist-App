import React, { useState } from 'react';

import './searchBar-style.css';

function SearchBar(props) {

    const [input, setInput] = useState("") 

    const handleChange = (e) => { 
        setInput(e.target.value)
    }

    const handleClick = () => { 
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