import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";

export default function RecipelDetailsScreen() {
  // useState pour stocker les données du repas
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

  return (
    // ScrollView - si les objets ne tiennent pas sur l'écran, nous utilisons pour le défilement
    // nous vérifions s'il existe des données de recette. Si une recette existe, son contenu est affiché ; sinon, un message d'erreur s'affiche.
    <ScrollView contentContainerStyle={styles.container}>
      {meal ? (
        <View style={styles.recipeCard}>
          <Text style={styles.title}>{meal.strMeal}</Text>
          <Text style={styles.description}>{meal.strInstructions}</Text>
          <Text style={styles.category}>Catégorie : {meal.strCategory}</Text>
          {/* Vous pouvez ajouter d'autres informations comme une image */}
        </View>
      ) : (
        <Text style={styles.errorText}>Recette non trouvée</Text>
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
