import React, { useState } from "react";
import { useRouter } from "expo-router";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  Pressable,
  Animated,
} from "react-native";

export default function Index() {
  const [search, setSearch] = useState("");
  const [scale] = useState(new Animated.Value(1));
  const router = useRouter();

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const listRecipes = () => {
    router.push("liste");
  };

  const SearchRecipes = () => {
    router.push(`liste/search/${search}`);
  };

  const RandomRecipes = () => {
    router.push(`liste/random`);
  };

  const UserItem = () => {
    router.push(`user/idex`);
  };

  const ParametersScreenDrawerItem = () => {
    router.push(`user/parameters`);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <Image
          source={require("@/assets/images/veg.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <TextInput
          style={styles.input}
          value={search}
          onChangeText={setSearch}
          placeholder="Recherchez une recette"
          placeholderTextColor="#666"
        />
        <Animated.View style={[{ transform: [{ scale }] }]}>
          <Pressable
            style={styles.button}
            onPress={RandomRecipes}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
          >
            <Text style={styles.buttonText}>Recette aléatoire</Text>
          </Pressable>
        </Animated.View>
        <Animated.View style={[{ transform: [{ scale }] }]}>
          <Pressable
            style={styles.button}
            onPress={SearchRecipes}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
          >
            <Text style={styles.buttonText}>Chercher une recette</Text>
          </Pressable>
        </Animated.View>
        <View style={styles.cardContainer}>
          <Pressable style={styles.card} onPress={listRecipes}>
            <Text style={styles.cardTitle}>Voir la liste des recettes</Text>
          </Pressable>
          <Pressable style={styles.card} onPress={UserItem}>
            <Text style={styles.cardTitle}>Voir profil utilisateur</Text>
          </Pressable>
          <Pressable style={styles.card} onPress={ParametersScreenDrawerItem}>
            <Text style={styles.cardTitle}>Paramètres</Text>
          </Pressable>
        </View>

        <Text style={styles.maintitle}>Les meilleurs recettes:</Text>
        <Pressable style={styles.recipeCard}>
          <Text style={styles.recipeText}>
            Spaghetti bolognaise - Des pâtes avec de la sauce tomate et de la
            viande hachée
          </Text>
          <Image
            source={require("@/assets/images/b.png")}
            style={styles.recipeImage}
            resizeMode="contain"
          />
        </Pressable>
        <Pressable style={styles.recipeCard}>
          <Text style={styles.recipeText}>
            Salade César - Une salade avec de la salade verte, du poulet, des
            croûtons et de la sauce César
          </Text>
          <Image
            source={require("@/assets/images/cs.png")}
            style={styles.recipeImage}
            resizeMode="contain"
          />
        </Pressable>
        <Pressable style={styles.recipeCard}>
          <Text style={styles.recipeText}>
            Tarte aux pommes - Une tarte sucrée avec des pommes
          </Text>
          <Image
            source={require("@/assets/images/tarte.png")}
            style={styles.recipeImage}
            resizeMode="contain"
          />
        </Pressable>

        <View style={styles.footer}>
          <Text style={styles.text}>
            © 2024 VotreNom. Tous droits réservés.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#000",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: "#4caf50",
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#222",
    color: "#fff",
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    margin: 20,
  },
  button: {
    backgroundColor: "#4caf50",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  cardContainer: {
    marginVertical: 20,
  },
  card: {
    backgroundColor: "#111",
    borderRadius: 10,
    padding: 20,
    marginBottom: 16,
    shadowColor: "#4caf50",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 5,
    elevation: 2,
    borderColor: "#4caf50",
    borderWidth: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#4caf50",
    textAlign: "center",
  },
  maintitle: {
    fontSize: 22,
    fontWeight: "600",
    color: "#4caf50",
    marginTop: 24,
    marginBottom: 12,
    textAlign: "center",
  },
  recipeCard: {
    backgroundColor: "#111",
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#4caf50",
    shadowColor: "#4caf50",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 5,
    elevation: 2,
  },
  recipeText: {
    fontSize: 16,
    color: "#fff",
    flex: 1,
  },
  recipeImage: {
    width: 80,
    height: 80,
    marginLeft: 10,
    borderRadius: 10,
  },
  footer: {
    marginTop: 20,
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "#4caf50",
  },
  text: {
    fontSize: 12,
    color: "#666",
    textAlign: "center",
  },
});
