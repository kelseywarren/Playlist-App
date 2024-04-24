
import './App.css';

import SearchBar from '../Search/searchBar';
import ResultList from '../SearchResults/results';
import Playlist from '../Playlist/playlist';


function App() {
  return (
    <div className="App">
       <h1 className="title">The Lounge</h1>
       <SearchBar />
       <div className="result-playlist">
        <ResultList />
        <Playlist />
       </div>
    </div>
  );
}

export default App;
