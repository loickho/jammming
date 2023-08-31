import { useState } from 'react';
import './App.css';
import SearchBar from './components/searchBar/searchBar'
import SearchResults from './components/searchResults/searchResults';
import Playlist from './components/playlist/playlist';
import TrackList from './components/trackList/trackList';

function App() {
  // const track = [
  //   { id: 1, name: "BIZCOCHITO", artist: "Rosalia", album: "Motomami"},
  //   { id: 2, name: "lil", artist: "lil john", album: "jonjon"},
  //   { id: 3, name: "figaro", artist: "mozart", album: "le nozze di figaro"}
  // ]

  // const [tracks, setTracks] = useState(track);
  const [playlistName, setPlaylistName] = useState("hard beatz (playlist name)");
  const [playlistTracks, setPlaylistTracks] = useState([
    { id: 1, name: "BIZCOCHITO", artist: "Rosalia", album: "Motomami"}
  ]);
  const [searchResults, setSearchResults] = useState([
    {id: 4, name: "searchResultsName1", artist: "searchResultsArtist1", album: "searchResultsAlbum1"},
    {id: 5, name: "searchResultsName2", artist: "searchResultsArtist2", album: "searchResultsAlbum2"}
  ]);

  function addTrack(track){
    if (!playlistTracks.some(t => t.id === track.id)){
      setPlaylistTracks([...playlistTracks, track]);
    } else {
      console.log("Track already in playlist")
    }
  };

  function removeTrack(track){
    const newTracks = playlistTracks.filter(t => t.id !== track.id);
    setPlaylistTracks(newTracks);
  };

  return (
  <div className="App">
      <h1>Jammming</h1>
      <SearchBar />
      <SearchResults searchResults={searchResults} onAdd={addTrack}/>
      <Playlist playlistName={playlistName} playlistTracks={playlistTracks} onRemove={removeTrack}/>
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
