import { useLocalSearchParams } from "expo-router";
import { ScrollView, Text, View, StyleSheet } from "react-native";

export default function RecipelDetailsScreen() {
  const { id } = useLocalSearchParams();
  const meals = [
    {
      id: 1,
      title: "Spaghetti bolognaise",
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
      title: "Tarte aux pommes",
      description: "Une tarte sucrée avec des pommes",
      image:
        "https://assets.afcdn.com/recipe/20180706/80576_w1024h768c1cx2736cy1824.jpg",
      category: "dessert",
    },
    {
      id: 4,
      title: "Risotto aux champignons",
      description: "Un risotto crémeux avec des champignons",
      image:
        "https://assets.afcdn.com/recipe/20180605/79594_w1024h768c1cx2736cy1824.jpg",
      category: "pasta",
    },
    {
      id: 5,
      title: "Salade niçoise",
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
  const recipe = meals.find((recipe) => recipe.id === parseInt(id));

  return (
    // ScrollView - si les objets ne tiennent pas sur l'écran, nous utilisons pour le défilement
    <ScrollView contentContainerStyle={styles.container}>
      {recipe ? (
        <View style={styles.recipeCard}>
          <Text style={styles.title}>{recipe.title}</Text>
          <Text style={styles.description}>{recipe.description}</Text>
          <Text style={styles.category}>Category: {recipe.category}</Text>
        </View>
      ) : (
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
