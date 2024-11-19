import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";

export default function RecipelDetailsScreen() {
  //useState avec un tableau vide
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    // appeler la fonction asynchrone
    (async () => {
      //on demande API pour obtenir data
      const mealsJson = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s="
      );
      //Convertir la réponse au format JSON
      const meals = await mealsJson.json();
      console.log(meals);

      setMeals(meals.meals);
    })();
    //que une fois
  }, []);

  return (
    // ScrollView - si les objets ne tiennent pas sur l'écran, nous utilisons pour le défilement
    //  nous vérifions s'il existe des données de recette. Si une recette existe, son contenu est affiché ; sinon, un message d'erreur s'affiche.
    <ScrollView contentContainerStyle={styles.container}>
      // S'il y a au moins un élément dans le tableau des repas, nous les
      affichons sous forme de liste
      {meals.length > 0 ? (
        //Parcourir chaque élément du tableau des repas à l'aide de la méthode map
        meals.map((meal, index) => (
          <View style={styles.recipeCard}>
            <Text style={styles.title}>{meal.title}</Text>
            <Text style={styles.description}>{meal.description}</Text>
            <Text style={styles.category}>Category: {meal.category}</Text>
          </View>
        ))
      ) : (
        // S'il n'y a pas de recettes (le tableau des repas est vide), afficher un message d'erreur.
        <Text style={styles.errorText}>Recipe not found</Text>
      )}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f8f9fa",
  },
  recipeCard: {
    borderRadius: 8,
    backgroundColor: "#ffffff",
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 8,
  },
  category: {
    fontSize: 14,
    color: "#6c757d",
  },
  errorText: {
    fontSize: 18,
    color: "red",
    textAlign: "center",
    marginTop: 20,
  },
});
