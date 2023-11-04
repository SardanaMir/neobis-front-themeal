import React from 'react';
import './Promo.css';
const img = './img/test.jpg';

function Promo() {
    return (
        <div className='promo'>  
            <div className="container">
                <div className='promo__block'>
                    <p className='subtitle'>Meal of the day</p>
                    <h2 className='promo__title'>Fruit and Cream Cheese Breakfast Pastries</h2>
                    <p className='promo__descr'>Breakfast | American</p>
                </div>
                <div>
                    <img src={img} alt="meal" />
                </div>
            </div>
        </div>
    );
  }
  
export default Promo;