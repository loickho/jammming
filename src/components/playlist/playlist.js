import styles from './playlist.css';
import Tracklist from '../trackList/trackList';

function Playlist(props){
  function handleChange(e){
    props.setPlaylistName(e.target.value)
  };

  return (
    <div className="playlist">
      <input value={props.playlistName} onChange={handleChange}/>
      <Tracklist
        tracks={props.playlistTracks}
        onRemove={props.onRemove}
        isRemoval={true}
      />
      <button>Save to Spotify</button>
    </div>
  )
}

export default Playlist;
