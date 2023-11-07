import React, {useState, useEffect} from 'react';
import Header from '../Header/Header';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Recipe.css';

function Recipe() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState([]);
    
    useEffect(() => {
        const API_URL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id;
        axios.get(API_URL).then((response) => {
            setRecipe(response.data.meals[0]);
        });   
    }, []);

    return (
        <div className='recipe'>
            <Header/>
            <div className="container">
                <div>
                    <h2 className='title' id={recipe.idMeal}>{recipe.strMeal}</h2>
                    <p className='descr'>{recipe.strCategory} | {recipe.strArea}</p>
                    <div className='fl-ai-cen recipe__block'>
                        <div>
                            {Object.keys(recipe)
                            .filter((item) => item.includes("strIngredient") && recipe[item])
                            .map((item, idx) => (
                                <p>
                                - {recipe[item]} <b>{recipe["strMeasure" + (idx + 1)]}</b>
                                </p>
                            ))}
                        </div>
                        <div className='recipe__img'>
                            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                        </div>
                    </div>

                </div>

                <div className='instruction'>
                    <h2>Instruction</h2>
                    <p className='descr'>{recipe.strInstructions}</p>
                    <button className='btnYoutube'><a href={recipe.strYoutube}>Watch on Youtube</a></button>
                </div>
            </div>
        </div>
    );
  }
  
export default Recipe;