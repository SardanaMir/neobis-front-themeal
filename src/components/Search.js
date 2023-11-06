import React, {useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Search.css';

function Search() {
    const [findedMeal, setfindedMeal] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Значение из input:', inputValue);
        const apiUrl1 = 'https://www.themealdb.com/api/json/v1/1/search.php?s=' + inputValue;
        axios.get(apiUrl1).then((response) => {
            setfindedMeal(response.data.meals);
        });   
    };

    return (
        <div className='search'>
            <h2 className="subtitle">Find your Meal</h2>
            <form className='searchBlock' onSubmit={handleSubmit}>
                <input className="searchInput" type="text" placeholder="Find your meal" value={inputValue} onChange={handleChange}/>
                <button className='searchBtn'>Search</button>
            </form>
            <div className="container">
                {findedMeal.length > 0 ? (
                    findedMeal.map((meal) => (
                        <div key={meal.idMeal} className="meal-block">
                            <Link to={{ pathname: `/${meal.idMeal}`}}>
                                <img src={meal.strMealThumb} alt="meal" />
                            </Link>
                            <div>   
                                <h3 className="meal-name">{meal.strMeal}</h3>
                                <p>{meal.strCategory} | {meal.strArea}</p>
                            </div>
                        </div>
                    ))
                ):(
                    <></>
                )}
            </div>  
        </div>
    );
  }
  
export default Search;