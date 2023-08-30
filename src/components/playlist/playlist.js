import styles from './playlist.css';
import Tracklist from '../trackList/trackList';

function Playlist(props){
  return (
    <>
      <h3>{props.playlistName}</h3>
      <Tracklist tracks={props.playlistTracks}/>
      <label>New Playlist</label>
      <input value="name" />
      <button>Save to Spotify</button>
    </>
  )
}

export default Playlist;
