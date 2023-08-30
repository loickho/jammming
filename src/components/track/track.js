import styles from './track.css';

function Track(props){
  return (
    <div className="Track">
      <div className="Track-info">
        <h3 className={styles.h3}>{props.name}</h3>
        <p>{props.artist}</p>
        <p>{props.album}</p>
        <p>{props.key}</p>
      </div>
    </div>
  )
}

export default Track;
