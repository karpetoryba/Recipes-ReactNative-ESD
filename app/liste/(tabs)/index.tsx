import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import useSearchMeals from "@/hook/useSearchMeals";
import {
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const RecipesScreen = () => {
  const router = useRouter();

  const meals = useSearchMeals();

  if (!meals.length) {
    return <Text style={styles.loadingText}>Chargement...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Liste des Recettes</Text>
      <FlatList
        data={meals}
        keyExtractor={(item) => item.idMeal}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push(`/liste/${item.idMeal}`)}
          >
            <Image source={{ uri: item.strMealThumb }} style={styles.image} />
            <View style={styles.cardContent}>
              <Text style={styles.recipeTitle}>{item.strMeal}</Text>
              <Text style={styles.description}>{item.strCategory}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default RecipesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#000",
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
    color: "#4caf50",
  },
  loadingText: {
    fontSize: 16,
    color: "#4caf50",
    textAlign: "center",
    marginTop: 20,
  },
  card: {
    backgroundColor: "#111",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 16,
    elevation: 4,
    shadowColor: "#4caf50",
    shadowOpacity: 0.5,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
    borderWidth: 1,
    borderColor: "#4caf50",
  },
  image: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  cardContent: {
    padding: 16,
  },
  recipeTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#4caf50",
  },
  description: {
    fontSize: 14,
    color: "#ccc",
    marginBottom: 8,
  },
});
