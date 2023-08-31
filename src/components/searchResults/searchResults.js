import TrackList from '../trackList/trackList';
import styles from './searchResults.css';

function SearchResults(props){
  return (
    <div className="SearchResults">
      <h2>Results:</h2>
      <TrackList
        tracks={props.searchResults}
        onAdd={props.onAdd}
      />
    </div>
  )
}

export default SearchResults;
