import { useEffect, useState } from "react";

export default function useGetMealById(id) {
  const [meal, setMeal] = useState([]);

  useEffect(() => {
    (async () => {
      const mealJson = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const meal = await mealJson.json();

      setMeal(meal.meals[0]);
    })();
  }, []);

  return meal;
}
