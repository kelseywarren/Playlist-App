import React, { useState } from 'react';
import './App.css';

import SearchBar from '../Search/searchBar';
import SearchResults from '../SearchResults/searchResults';
import Playlist from '../Playlist/playlist';
import { Spotify } from '../../utility/spotify';


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
const [playlistTracks, setPlaylistTracks] = useState([
  {
    name: "track 11",
    artist: "artist 11",        //mock data
    album: "album 11", 
    id: 11,

  },
  {
    name: "track 12",
    artist: "artist 12",       //mock data 
    album: "album 12", 
    id: 12,

  },
  {
    name: "track 13",
    artist: "artist 13",      // mock data 
    album: "album 13",
    id: 13,

  }
]);
const [playlistName, setPlaylistName] = useState("Playlist Name")

function addTrack(track) {
  const existingTrack = playlistTracks.find((t) => t.id === track.id);
  const newTrack = playlistTracks.concat(track);
  if(existingTrack) {
    console.log("track already exist")
  } else {
    setPlaylistTracks(newTrack);
  }
};

function removeTrack(track) {
  const existingTrack = playlistTracks.filter((t) => t.id !== track.id);
  setPlaylistTracks(existingTrack);
};

function updatePlaylistName(name) {
  setPlaylistName(name);
}

function savePlaylist() {
  const trackURIs = playlistTracks.map((t) => t.uri);
  Spotify.savePlaylist(playlistName, trackURIs).then(() => {
    updatePlaylistName('New Playlist');
    setPlaylistTracks([]);
  });
}

function search(input){
  Spotify.search(input).then((data) => setSearchResults(data));
}

  return (
    <div className="App">
       <h1 className="title">The Lounge</h1>
       <SearchBar onSearch={search} />
       <div className="result-playlist">
        <SearchResults 
        title="Search" 
        searchResults={searchResults}
        onAdd={addTrack}
        />
        <Playlist
        playlistName={playlistName}
        playlistTracks={playlistTracks}
        onRemove={removeTrack}
        onNameChange={updatePlaylistName}
        onSave={savePlaylist}
        />
       </div>
    </div>
  );
}

export default App;
