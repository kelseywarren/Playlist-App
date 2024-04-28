import React, { useState } from 'react';
import './App.css';

import SearchBar from '../Search/searchBar';
import SearchResults from '../SearchResults/searchResults';
import Playlist from '../Playlist/playlist';
//import { Spotify } from '../../utility/spotify';


function App() {
const [searchResults, setSearchResults] = useState([
  {
    name: "track 1",
    artist: "artist 1",        //mock data
    album: "album 1", 
    id: 1,

  },
  {
    name: "track 2",
    artist: "artist 2",       //mock data 
    album: "album 2", 
    id: 2,

  },
  {
    name: "track 3",
    artist: "artist 3",      // mock data 
    album: "album 3",
    id: 3,

  }

]);
const [playlistTracks, setPlaylistTracks] = useState([]);

const addTrack = (track) => {
  setPlaylistTracks((prev) => [...prev, track])
}

const removeTrack = (track) => {
setPlaylistTracks((prev) => prev.filter((currTrack) => currTrack.id !== track.id))
};

  return (
    <div className="App">
       <h1 className="title">The Lounge</h1>
       <SearchBar />
       <div className="result-playlist">
        <SearchResults 
        title="Results" 
        searchResults={searchResults}
        addTrack={addTrack}
        />
        <Playlist
        playlistTrack={playlistTracks}
        removeTrack={removeTrack} />
       </div>
    </div>
  );
}

export default App;
