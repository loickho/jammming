import { useState } from 'react';
import styles from './searchBar.css'

function SearchBar(){
  const [input, setInput] = useState('');

  return (
    <div>
      <label>Search</label>
      <input value = {input} type='text' placeholder="Enter a song, album, or artist" onChange={e => setInput(e.target.value)} />
      <button>SEARCH</button>
    </div>
  );
};

export default SearchBar;
