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
    { id: 1, name: "BIZCOCHITO", artist: "Rosalia", album: "Motomami", uri: "spotify:track:4kXxEhuatrvwrTQycA7s9B"}
  ]);
  const [searchResults, setSearchResults] = useState([
    {id: 4, name: "searchResultsName1", artist: "searchResultsArtist1", album: "searchResultsAlbum1", uri: "spotify:track:2i2gDpKKWjvnRTOZRhaPh2"},
    {id: 5, name: "searchResultsName2", artist: "searchResultsArtist2", album: "searchResultsAlbum2", uri: "spotify:track:47uSDINq6LvvNdMPvs82WV"}
  ]);

  function savePlaylist(){
    const trackURIs = playlistTracks.map(track => track.uri);
    console.log(trackURIs)
  };

  function search(term){
    console.log(term);
  };

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
      <SearchBar
        onSearch={search}
      />
      <SearchResults
        searchResults={searchResults}
        onAdd={addTrack}
      />
      <Playlist
        playlistName={playlistName}
        setPlaylistName={setPlaylistName}
        playlistTracks={playlistTracks}
        onRemove={removeTrack}
        savePlaylist={savePlaylist}
      />
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
