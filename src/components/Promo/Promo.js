import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './Promo.css';
import { Link } from 'react-router-dom';

function Promo() {
    const [meals, setMeals] = useState([]);
    const apiUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';
    
    useEffect(() => {
    axios.get(apiUrl).then((repos) => {
        setMeals(repos.data.meals);
    });
    }, []);

    return (
        <div className='promo'>  
          <div className="container">
            {meals.length > 0 ? (
            <div className='promo__block'>
                <div>
                    <p className='subtitle'>Meal of the day</p>
                    <Link to={{ pathname: `/${meals[0].idMeal}`}}>
                      <h2 className='title'>{meals[0].strMeal}</h2>
                    </Link>
                    <p className='descr'>{meals[0].strCategory} | {meals[0].strArea}</p>
                </div>
                <div>
                <Link to={{ pathname: `/${meals[0].idMeal}`}}>
                  <img src={meals[0].strMealThumb} alt="meal" />
                </Link>
                </div>
            </div>
            ) : (
            <p>Loading...</p>
            )}
          </div>
        </div>
      );

}
  
export default Promo;