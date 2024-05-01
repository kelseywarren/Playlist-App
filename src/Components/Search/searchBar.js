import React, { useState } from 'react';

import './searchBar-style.css';

function SearchBar(props) {

    const [input, setInput] = useState("") 

    const handleChange = (e) => { 
        setInput(e.target.value)
    }

    const handleClick = (e) => { 
        e.preventDefault(); // prevent search results from flashing and going away
        props.onSearch(input)
    } 

    return (
        <div> 
            <form onChange={handleChange}>{/* had to move onChange to form. previously was targeting input and wasn't working */}
            <input className="search" type="text" placeholder="Search for songs"></input>
            <button className="searchButton" onClick={handleClick}>Search</button>
            </form>
           
        </div>
    );
};

export default SearchBar;