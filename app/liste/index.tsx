import { useRoute } from "@react-navigation/native";
import { router, useRouter } from "expo-router";
import React from "react";
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
  const meals = [
    {
      id: 1,
      title: "Spaghetti Bolognaise",
      description: "Des pâtes avec de la sauce tomate et de la viande hachée",
      image:
        "https://assets.afcdn.com/recipe/20160419/14652_w1024h1024c1cx2420cy1872.jpg",
      category: "pasta",
    },
    {
      id: 2,
      title: "Salade César",
      description:
        "Une salade avec de la salade verte, du poulet, des croûtons et de la sauce César",
      image: "https://images.ricardocuisine.com/services/recipes/8440.jpg",
      category: "salad",
    },
    {
      id: 3,
      title: "Tarte aux Pommes",
      description: "Une tarte sucrée avec des pommes",
      image:
        "https://assets.afcdn.com/recipe/20180706/80576_w1024h768c1cx2736cy1824.jpg",
      category: "dessert",
    },
    {
      id: 4,
      title: "Risotto aux Champignons",
      description: "Un risotto crémeux avec des champignons",
      image:
        "https://assets.afcdn.com/recipe/20180605/79594_w1024h768c1cx2736cy1824.jpg",
      category: "pasta",
    },
    {
      id: 5,
      title: "Salade Niçoise",
      description:
        "Une salade avec des tomates, des oeufs, des olives, du thon et des haricots verts",
      image:
        "https://assets.afcdn.com/recipe/20180706/80576_w1024h768c1cx2736cy1824.jpg",
      category: "salad",
    },
    {
      id: 6,
      title: "Tiramisu",
      description:
        "Un dessert italien avec du café, des biscuits et du mascarpone",
      image:
        "https://assets.afcdn.com/recipe/20180605/79594_w1024h768c1cx2736cy1824.jpg",
      category: "dessert",
    },
  ];
  // handleNavigateToRecipesDetails - pour accéder à la page de détails de la recette
  const handleNavigateToRecipesDetails = (recipeId) => {
    router.push("liste/" + recipeId);
  };

  const renderRecipe = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.cardContent}>
        <Text style={styles.recipeTitle}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        //TouchableOpacity - Lorsque l'on appuie sur le bouton, sa transparence
        change légèrement, créant l'effet visuel d'une pression.
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleNavigateToRecipesDetails(item.id)}
        >
          <Text style={styles.buttonText}>Voir le recette</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Liste des Recettes</Text>
      //FlatList - on utilise pour afficher de longues listes de données.
      <FlatList
        data={meals}
        renderItem={renderRecipe}
        keyExtractor={(item) => item.id.toString()}
      />
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
