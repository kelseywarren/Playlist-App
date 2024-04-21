import logo from './logo.svg';
import './App.css';
import SearchBar from './Search/SearchBar';
import ResultList from './SearchResults/results';

function App() {
  return (
    <div className="App">
       <h1 className="title">The Lounge</h1>
       <SearchBar />
       <ResultList />
    </div>
  );
}

export default App;
