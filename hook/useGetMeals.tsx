import { useEffect, useState } from "react";

export default function useGetMeals() {
  const [meal, setMeal] = useState([]);

  useEffect(() => {
    // Fonction asynchrone pour récupérer les données du repas par ID
    (async () => {
      // Demande de l'API pour obtenir les données par ID
      const mealJson = await fetch(
        `https://www.themealdb.com/api/json/v1/1/random.php`
      );
      const meal = await mealJson.json(); // Conversion de la réponse en JSON
      setMeal(meal.meals[0]); // on assure de récupérer le premier élément
    })();
  }, []);

  return meal;
}
