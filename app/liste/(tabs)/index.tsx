import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

export default function RecipesScreen() {
  const router = useRouter();
  const [meals, setMeals] = useState<
    {
      idMeal: string;
      strMeal: string;
      strMealThumb: string;
      strCategory: string;
    }[]
  >([]);

  useEffect(() => {
    // Fonction asynchrone pour récupérer les données du repas
    (async () => {
      const mealsJson = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=`
      );
      const meals = await mealsJson.json();
      setMeals(meals.meals);
    })();
  }, []);

  const handleNavigateToRecipesDetails = (idMeal: string) => {
    router.push(`liste/${idMeal}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Liste des Recettes</Text>
      {meals.length === 0 ? (
        <Text style={styles.loadingText}>Chargement...</Text>
      ) : (
        <FlatList
          data={meals}
          keyExtractor={(item) => item.idMeal}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() => handleNavigateToRecipesDetails(item.idMeal)}
            >
              <Image source={{ uri: item.strMealThumb }} style={styles.image} />
              <View style={styles.cardContent}>
                <Text style={styles.recipeTitle}>{item.strMeal}</Text>
                <Text style={styles.description}>{item.strCategory}</Text>
                <Text style={styles.linkText}>Voir le recette →</Text>
              </View>
            </TouchableOpacity>
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
    backgroundColor: "#e9f5e9",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
    color: "#388e3c",
  },
  loadingText: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginTop: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 16,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    borderWidth: 1,
    borderColor: "#4caf50",
  },
  image: {
    width: "100%",
    height: 200,
  },
  cardContent: {
    padding: 16,
  },
  recipeTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#2e7d32",
  },
  description: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
  },
  linkText: {
    fontSize: 14,
    color: "#1b5e20",
    fontWeight: "bold",
  },
});
