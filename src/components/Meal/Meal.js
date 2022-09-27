

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBagShopping, faBookBookmark } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Meal.css'
const Meal = ({meal,handleAddToCart}) => {
    // console.log(meal);
    const {strMealThumb,strCategory,strMeal,strArea,strInstructions}=meal
    return (
        <div className='card'>
            <img src={strMealThumb} alt="" />
           <div className='card-info'>
           <p>Category : {strCategory}</p>
            <p>Name : {strMeal}</p>
            <p>Instruction : {strInstructions? strInstructions.slice(0,50) : "N/A"}</p>
            <p>Area : {strArea}</p>
            <button onClick={()=>handleAddToCart(meal)}>Add To Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
            <button>Details <FontAwesomeIcon icon={faBagShopping}></FontAwesomeIcon></button>
            <button>Bookmark <FontAwesomeIcon icon={faBookBookmark}></FontAwesomeIcon> </button>
           </div>
            
        </div>
    );
};

export default Meal;