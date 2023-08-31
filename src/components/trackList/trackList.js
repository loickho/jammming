import styles from './trackList.css';
import Track from '../track/track'

function TrackList(props){
  return (
    <div className='TrackList'>
      {props.tracks.map(track => (
        <Track
          key={track.id}
          name={track.name}
          artist={track.artist}
          album={track.album}
          onAdd={props.onAdd}
          track={track}
        />
      ))}
    </div>
  );
};

export default TrackList;
