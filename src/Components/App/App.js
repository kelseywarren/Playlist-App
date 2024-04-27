
import './App.css';

import SearchBar from '../Search/searchBar';
import SearchResults from '../SearchResults/searchResults';
import Playlist from '../Playlist/playlist';
import { Spotify } from '../../utility/spotify';


function App() {

  return (
    <div className="App">
       <h1 className="title">The Lounge</h1>
       <SearchBar />
       <div className="result-playlist">
        <SearchResults title="Results" />
        <Playlist />
       </div>
    </div>
  );
}

export default App;
