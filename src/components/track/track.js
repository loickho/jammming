import styles from './track.css';

function Track(props){
  function addTrack(e){
    e.preventDefault()
    props.onAdd(props.track)
  }

  return (
    <div className="Track">
      <div className="Track-info">
        <h3 className={styles.h3}>{props.name}</h3>
        <p>{props.artist} || {props.album}</p>
        <button onClick={addTrack}>+</button>
      </div>
    </div>
  )
}

export default Track;
