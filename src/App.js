import { useState } from 'react';
import './App.css';
import SearchBar from './components/searchBar/searchBar'
import SearchResults from './components/searchResults/searchResults';
import Playlist from './components/playlist/playlist';
import TrackList from './components/trackList/trackList';

function App() {
  const track = [
    { id: 1, name: "asdf", artist: "Rosalia", album: "cojones"},
    { id: 2, name: "lil", artist: "lil john", album: "jonjon"},
    { id: 3, name: "figaro", artist: "mozart", album: "le nozze di figaro"}
  ]

  const [tracks, setTracks] = useState(track);
  const [playlistName, setPlaylistName] = useState("testing name");
  const [playlistTracks, setPlaylistTracks] = useState([
    {id: 2, name: "lil"},
    {id: 3, name: "figaro"}
  ]);
  const [searchResults, setSearchResults] = useState([
    {id: 4, name: "searchResultsName", artist: "searchResultsArtist", album: "searchResultsAlbum"}
  ]);

  function addTrack(track){
    if (!tracks.some(t => t.id === track.id)){
      setTracks([...tracks, track]);
    }
  }

  function removeTrack(track){
    const newTracks = tracks.filter(t => t.id !== track.id);
    setTracks(newTracks);
  }

  return (
  <div className="App">
      <h1>Jammming</h1>
      <SearchBar />
      <SearchResults searchResults={searchResults}/>
      <Playlist playlistName={playlistName} playlistTracks={playlistTracks}/>
      <TrackList tracks={tracks}/>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
}

export default App;
