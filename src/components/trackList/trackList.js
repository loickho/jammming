import styles from './trackList.css';
import Track from '../track/track'

function TrackList(props, removeTrack){
  return (
    <div class='TrackList'>
      {props.tracks.map(track => (
        <Track key={track.id} name={track.name} artist={track.artist} album={track.album} removeTrack = {removeTrack} />
      ))}
    </div>
  );
};

export default TrackList;
