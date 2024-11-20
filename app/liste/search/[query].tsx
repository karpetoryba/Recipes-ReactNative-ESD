import { router, useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
} from "react-native";

export default function IndexScreen() {
  const [meals, setMeals] = useState<
    { idMeal: String; strMeal: String; strMealThumb: string }[]
  >([]);
  const local = useLocalSearchParams();

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${local.query}`
      );
      const meals = await response.json();

      setMeals(meals.meals);
    })();
  }, []);

  const handleNavigateToSingleMeal = (idMeal: string): void => {
    router.push(`meals/${idMeal}`);
  };

  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.h1}>
          Recherche pour : {local.query || "Tous les repas"}
        </Text>
      </View>
      <FlatList
        data={meals}
        style={styles.mealsList}
        contentContainerStyle={styles.mealsListContainer}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.mealCard}
            onPress={() => router.push(`meals/${idMeal}`)}
          >
            <Image
              source={{ uri: item.strMealThumb }}
              style={styles.mealImage}
            />
            <Text style={styles.mealText}>{item.strMeal}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.idMeal}
        ListEmptyComponent={<Text>No meals found.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 16,
  },
  header: {
    marginBottom: 16,
  },
  h1: {
    fontSize: 24,
    fontWeight: "bold",
  },
  mealsList: {
    flex: 1,
  },
  mealsListContainer: {
    paddingBottom: 16,
  },
  mealCard: {
    marginBottom: 16,
    borderRadius: 8,
    overflow: "hidden",
    borderColor: "#ccc",
    borderWidth: 1,
  },
  mealImage: {
    width: "100%",
    height: 200,
  },
  mealText: {
    padding: 16,
    fontSize: 18,
  },
});
