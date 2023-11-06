import React, {useState, useEffect} from 'react';
import Header from '../Header/Header';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Recipe.css';
function Recipe() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState([]);
    
    useEffect(() => {
        const apiUrl1 = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id;
        axios.get(apiUrl1).then((response) => {
            setRecipe(response.data.meals[0]);
        });   
    }, []);
    console.log(recipe);

    return (
        <div>
            <Header/>
            <div className="container">
                <div className='recipe'>
                    <h2 className='promo__title' id={recipe.idMeal}>{recipe.strMeal}</h2>
                    <p className='promo__descr'>{recipe.strCategory} | {recipe.strArea}</p>
                    <div className='fl'>
                        <div className="ingredients">
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

                <div>
                    <h2>Instruction</h2>
                    <p>{recipe.strInstructions}</p>
                    <button className='btnYoutube'><a href={recipe.strYoutube}>Watch on Youtube</a></button>
                </div>
            </div>

        </div>
    );
  }
  
export default Recipe;