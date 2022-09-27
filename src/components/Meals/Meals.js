
// import Meal from '../Meal/Meal';
import Meal from '../Meal/Meal';
import './Meals.css'



const Meals = ({ meals,handleAddToCart }) => {

    // console.log(meals);

    return (

        <div>

       <div className="card-container">
        
         {
            meals?.map((meal)=> <Meal meal={meal} handleAddToCart={handleAddToCart} key={meal.idMeal}></Meal>)
        } 

       </div>



        </div>
    );
};

export default Meals;