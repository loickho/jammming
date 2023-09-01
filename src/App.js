import { useState } from 'react';
import './App.css';
import SearchBar from './components/searchBar/searchBar'
import SearchResults from './components/searchResults/searchResults';
import Playlist from './components/playlist/playlist';
import TrackList from './components/trackList/trackList';
import Spotify from './util/Spotify';

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
  const [searchResults, setSearchResults] = useState([]);

  function savePlaylist(){
    const trackURIs = playlistTracks.map(track => track.uri);
    console.log(trackURIs)
  };

  // function search(term){
  //   Spotify.search(term)
  //     .then(result => {
  //       setSearchResults(result)
  //     })
  //   console.log(term);
  // };

  function search(term){
    var accessToken = "";
    const clientID="8ca14bc80f9a4aa3ae49cb965b6b4687";
    const redirectURI="http://localhost:3000"

    function getAccessToken(){
      if (accessToken) {
        return accessToken
      }
      const urlAccessToken = window.location.href.match(/access_token=([^&]*)/);
      const expirationTime = window.location.href.match(/expires_in=([^&]*)/);
      if (urlAccessToken && expirationTime){
        accessToken = urlAccessToken[1];
        const expiresIn = Number(expirationTime[1]);
        window.setTimeout(() => accessToken = '', expiresIn * 1000);
        window.history.pushState('Access Token', null, '/');
        return accessToken;
      } else {
        const redirect = `https://accounts.spotify.com/authorize?response_type=token&client_id=${clientID}&redirect_uri=${redirectURI}`;
        window.location = redirect;
      }
    };

    accessToken = getAccessToken();
    let url = `https://api.spotify.com/v1/search?q=${term}&type=track`
    fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`
      },
    })
    .then(response => {
      return response.json();
    })
    .then(jsonResponse => {
      if (!jsonResponse.tracks){
        return [];
      }
      const newTracks = jsonResponse.tracks.items.map(tracks => ({
        id: tracks.id,
        name: tracks.name,
        artist: tracks.artists[0].name,
        album: tracks.album.name
      }))
      // .then(result => {
      //   setSearchResults(result)
      // });
      setSearchResults(newTracks);
      console.log(newTracks)
    })




    // return fetch(`https://api.spotify.com/v1/search?q=${term}&type=track`, {
    //   headers: { 'Authorization': `Bearer ${accessToken}` },
    // })
    // .then(response => {
    //   return response.json();
    // })
    // .then((jsonResponse) => {
    //   if (!jsonResponse.tracks){
    //     return [];
    //   }
    //   return jsonResponse.tracks.items.map(tracks => ({
    //     id: tracks.id,
    //     name: tracks.name,
    //     artist: tracks.artists[0].name,
    //     album: tracks.album
    //   }))
    // })
  }

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
