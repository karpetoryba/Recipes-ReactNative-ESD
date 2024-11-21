import { useEffect, useState } from "react";

export default function useSearchMeals() {
  const [meals, setMeals] = useState<
    {
      idMeal: string;
      strMeal: string;
      strMealThumb: string;
      strCategory: string;
    }[]
  >([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=`
      );
      const data = await response.json();
      setMeals(data.meals || []);
    })();
  }, []);

  return meals;
}
