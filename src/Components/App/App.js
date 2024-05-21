// import react, useState, useEffect 
// import components 
// import Spotify 
import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from '../Search/searchBar';
import SearchResults from '../SearchResults/searchResults';
import Playlist from '../Playlist/playlist';
import UserProfile from '../User/user';
//import UserPlaylistContainer from '../User/user-playlist-container';
import Success from '../Message/message';
import { Spotify } from '../../utility/spotify';

// Main App function
function App() {
// states
const [searchResults, setSearchResults] = useState([
  /*{
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

  }*/

]);
const [playlistTracks, setPlaylistTracks] = useState([
  /*{
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

  }*/
]);
const [playlistName, setPlaylistName] = useState("Playlist Name");
const [user, setUser] = useState([]);
const [link, setLink] = useState([]);
const [success, setSuccess] = useState(false);

// const [userPlaylist, setUserPlaylist] = useState([]);
/*
useEffect(() => {
  Spotify.userPlaylists().then((data) => {
    setUserPlaylist(data)
  })
}, [savePlaylist]) // renders on update
*/

// get user username and spotify profile link and render once
useEffect(() => {
  Spotify.userProfile().then((data) => {
    setUser(data.display_name);
    setLink(data.external_urls.spotify)
  });
}, [])

// get search data and render data 
function search(input) {
  Spotify.search(input).then((data) => setSearchResults(data));
}

// add new track function 
function addTrack(track) {
  const existingTrack = playlistTracks.find((t) => t.id === track.id);
  const newTrack = playlistTracks.concat(track);
  if(existingTrack) {
    console.log("track already exist")
  } else {
    setPlaylistTracks(newTrack);
  }
};

// remove track function 
function removeTrack(track) {
  const existingTrack = playlistTracks.filter((t) => t.id !== track.id);
  setPlaylistTracks(existingTrack);
};

// update playlist name 
function updatePlaylistName(name) {
  setPlaylistName(name);
}

// save playlist function and reset states
function savePlaylist() {
  const trackURIs = playlistTracks.map((t) => t.uri);
  Spotify.savePlaylist(playlistName, trackURIs).then(() => {
    setPlaylistName('New Playlist');
    setPlaylistTracks([]);
    setSearchResults([]);
    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
    }, 3000)
    //setUserPlaylist(prev => [userPlaylist, ...prev]) // add new playlist to user playlist container 
  });
};

// component renders 
  return (
    <div className="App">
       <h1 className="title">The Lounge</h1>
       <UserProfile 
       userName={user} 
       userLink={link}
       />
       <Success
       success={success}
       />
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
       <div>
      </div>
    </div>
  );
};

//       <UserPlaylistContainercontainer={userPlaylist}/>

export default App;
