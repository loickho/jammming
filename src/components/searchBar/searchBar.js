import { useState } from 'react';
import styles from './searchBar.css'

function SearchBar(props){
  const [input, setInput] = useState('');

  function search(){
    props.onSearch(input)
  }

  return (
    <div className="SearchBar">
      <label>Search</label>
      <input value = {input} type='text' placeholder="Enter a song, album, or artist" onChange={e => setInput(e.target.value)} />
      <button onClick={search}>SEARCH</button>
    </div>
  );
};

export default SearchBar;
