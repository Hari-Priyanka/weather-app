import React, {useState} from 'react';
import './Search.css';

const Search = ({onSearch}) => {
    const [city, setCity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(city);
        setCity('');
    };

  return (
    <div className='search'>
      <form className='search_box' onSubmit={handleSubmit}>
        <input 
        type='text' 
        placeholder='Enter city name...' 
        value={city}
        onSubmit={handleSubmit}
        onChange={(e) => setCity(e.target.value)}
        />
        <button type='submit' className='search_btn'>Search</button>
      </form>
    </div>
  )
};

export default Search;
