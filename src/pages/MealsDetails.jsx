import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function MealDetails() {
  const { id } = useParams();

  const [meal, setMeal] = useState(null);

  useEffect(() => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMeal(data.meals[0]);
      });
  }, [id]);

  if (!meal) {
    return <h2>Loading...</h2>;
  }

  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];

    if (ingredient && ingredient.trim() !== "") {
      ingredients.push(`${ingredient} - ${measure}`);
    }
  }

  return (
    <div className="container">
      <Link to="/">← Back to Categories</Link>

      <h1>{meal.strMeal}</h1>

      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        width="400"
      />

      <h2>Category</h2>
      <p>{meal.strCategory}</p>

      <h2>Area</h2>
      <p>{meal.strArea}</p>

      <h2>Ingredients</h2>

      <ul>
        {ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2>Instructions</h2>

      <p>{meal.strInstructions}</p>
    </div>
  );
}

export default MealDetails;