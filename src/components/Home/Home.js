

import React, { useEffect, useState } from 'react';
import Meals from '../Meals/Meals';
import './Home.css'
const Home = () => {
    const [meals, setMeals] = useState([])
    const [search, setSearch] = useState("")
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`)
            .then(res => res.json())
            .then(data => setMeals(data?.meals))
    }, [search])

    // console.log(meals);

    const handleAddToCart = (meal) => {
        // const newCart=[...cart,meal]
        setCart([...cart, meal])
    }
    //   console.log(cart);
    return (
        <div className='home-container'>
            <div className="meals-container">

                <input onChange={(e) => setSearch(e.target.value)} type="text" className='search-field' placeholder='search food by words' />
                <div className="meals-container">

                    <Meals meals={meals} handleAddToCart={handleAddToCart}></Meals>


                </div>

            </div>
            <div className="meal-cart-container">
                <div className="cart">

                    <h3>Order history</h3>
                    <h4>Selected Foods : {cart.length}</h4>

                    {
                        cart?.map(meal => <li key={meal.idMeal}>{meal.strMeal} </li>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;