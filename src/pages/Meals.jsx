import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Meals() {
  const { categoryName } = useParams();

  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMeals(data.meals || []);
      });
  }, [categoryName]);

  return (
    <div>
      <h1>{categoryName} Meals</h1>

      <Link to="/">← Back to Categories</Link>

      <div className="grid">
        {meals.map((meal) => (
          <div className="card" key={meal.idMeal}>
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
            />

            <h2>{meal.strMeal}</h2>

            <Link to={`/meal/${meal.idMeal}`}>
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Meals;