import styles from './track.css';

function Track(props){
  return (
    <div className="Track">
      <div className="Track-info">
        <h3 className={styles.h3}>{props.name}</h3>
        <p>{props.artist}</p>
        <p>{props.album}</p>
        <p>{props.id}</p>
      </div>
      <button>Add Or Remove Track Goes Herey</button>
    </div>
  )
}

export default Track;
