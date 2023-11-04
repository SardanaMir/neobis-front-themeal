import React from 'react';
import './Search.css';


function Search() {
    return (
        <div className='search'>  
            <h2 className="subtitle">Find your Meal</h2>
            <form className='searchBlock'>
                <input className="searchInput" type="text" placeholder="Find your meal"/>
                <button className='searchBtn'>Search</button>
            </form>
        </div>
    );
  }
  
export default Search;