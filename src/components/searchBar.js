import { useState } from 'react';

function SearchBar(){
  const [input, setInput] = useState('');

  return (
    <div>
      <label>Search</label>
      <input type='text' onChange={e => setInput(e.target.value)} />
    </div>
  );
};

export default SearchBar;
