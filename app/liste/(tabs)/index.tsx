import { useRoute } from "@react-navigation/native";
import { router, useRouter, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";

export default function RecipesScreen() {
  const router = useRouter();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    // Fonction asynchrone pour récupérer les données du repas par ID
    (async () => {
      // Demande de l'API pour obtenir les données par ID
      const mealsJson = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=`
      );
      const meals = await mealsJson.json(); // Conversion de la réponse en JSON
      setMeals(meals.meals); // on assure de récupérer le premier élément
    })();
  }, []);
  // handleNavigateToRecipesDetails - pour accéder à la page de détails de la recette
  const handleNavigateToRecipesDetails = (recipeId: number) => {
    router.push("liste/" + recipeId);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Liste des Recettes</Text>
      {meals.length === 0 ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={meals}
          keyExtractor={(item) => item.idMeal}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={{ uri: item.strMealThumb }} style={styles.image} />
              <View style={styles.cardContent}>
                <Text style={styles.recipeTitle}>{item.strMeal}</Text>
                <Text style={styles.description}>{item.strCategory}</Text>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => handleNavigateToRecipesDetails(item.idMeal)}
                >
                  <Text style={styles.buttonText}>Voir le recette</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
    color: "#333",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 16,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: "100%",
    height: 200,
  },
  cardContent: {
    padding: 16,
  },
  recipeTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#444",
  },
  description: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
