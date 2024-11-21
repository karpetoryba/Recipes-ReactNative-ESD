import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";

export default function useGetMealById() {
  const [meal, setMeal] = useState<{
    idMeal: String;
    strMeal: String;
    strInstructions: String;
    strCategory: string;
  } | null>(null);
  const { id } = useLocalSearchParams();

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
