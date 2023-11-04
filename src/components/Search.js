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

            <div className='meal-block'>
                <img src="https://www.themealdb.com/images/media/meals/1549542994.jpg" alt="meal" />
                <div>
                    <h3 className="meal-name">Salmon Avocado Salad</h3>
                    <p>Dessert | British</p>
                </div>
            </div>
        </div>
    );
  }
  
export default Search;