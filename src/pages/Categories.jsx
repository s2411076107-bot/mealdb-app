import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data.categories);
      });
  }, []);

  return (
    <div>
      <h1>Meal Categories</h1>

      {categories.map((category) => (
        <div className="card" key={category.idCategory}>
          <img
            src={category.strCategoryThumb}
            alt={category.strCategory}
          />

          <h2>{category.strCategory}</h2>

          <Link to={`/category/${category.strCategory}`}>
            View Meals
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Categories;