import React, { useState } from "react";
import { useRouter } from "expo-router";
import {
  Button,
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
} from "react-native";

export default function Index() {
  const [search, setSearch] = useState("");
  //for routing on my page
  const router = useRouter();

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

  const [inputValue, setInputValue] = useState("");

  // Handler for text input change
  const handleInputChange = (text) => {
    setInputValue(text);
  };

  // Handler for button click
  const handleButtonClick = () => {
    console.log(`Texte récupéré : ${inputValue}`);
  };

  return (
    //for scrolling to footer
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <Image
          source={require("@/assets/images/big.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <TextInput
          style={styles.input}
          value={search}
          onChangeText={setSearch}
          placeholder="Enter text here"
        />
        <Button title="Aficher le recette alératoire" onPress={RandomRecipes} />
        <Button title="Chercher le recette" onPress={SearchRecipes} />
        <View style={styles.card}>
          <Text style={styles.title}> Recettes</Text>
          <Text style={styles.soustext}>
            Les meilleurs recettes de Bordeaux:
          </Text>
          <Text style={styles.centretext}>
            Les Meilleures Recettes de Bordeaux : Un Voyage Culinaire
            Authentique Découvrez les trésors culinaires de Bordeaux à travers
            des recettes authentiques qui capturent l'essence de cette région
            réputée pour sa gastronomie et ses vins. Ce guide propose une
            sélection des plats les plus emblématiques de la ville, revisités
            avec passion et tradition. Laissez-vous séduire par la douceur des
            cannelés bordelais, plongez dans les saveurs du fameux entrecôte à
            la bordelaise, et savourez la richesse des spécialités comme les
            huîtres du Bassin d'Arcachon. Chaque recette est un hommage au
            patrimoine gastronomique bordelais, offrant un équilibre parfait
            entre savoir-faire local et ingrédients de qualité. Que vous soyez
            amateur de cuisine ou simple curieux, préparez-vous à un festin qui
            vous transportera au cœur de Bordeaux.
          </Text>
          <Button title="Voir liste des recettes" onPress={listRecipes} />
          <Button title="Voir user" onPress={UserItem} />
          <Button title="Voir param" onPress={ParametersScreenDrawerItem} />
          <Text style={styles.maintitle}>Les meilleurs recettes:</Text>
          <Text style={styles.recette}>
            1. Spaghetti bolognaise - Des pâtes avec de la sauce tomate et de la
            viande hachée
          </Text>
          <Image
            source={require("@/assets/images/b.png")}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.recette}>
            2. Salade César - Une salade avec de la salade verte, du poulet, des
            croûtons et de la sauce César
          </Text>
          <Image
            source={require("@/assets/images/cs.png")}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.recette}>
            3. Tarte aux pommes - Une tarte sucrée avec des pommes
          </Text>
          <Image
            source={require("@/assets/images/tarte.png")}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

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
    backgroundColor: "#f9f9f9",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  logo: {
    width: "100%",
    height: 200,
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  soustext: {
    fontSize: 16,
    color: "#666",
    marginBottom: 16,
  },
  centretext: {
    fontSize: 14,
    lineHeight: 22,
    color: "#444",
    textAlign: "justify",
    marginBottom: 16,
  },
  maintitle: {
    fontSize: 22,
    fontWeight: "600",
    color: "#222",
    marginTop: 24,
    marginBottom: 12,
  },
  recette: {
    fontSize: 16,
    color: "#333",
    marginBottom: 12,
  },
  footer: {
    marginTop: 20,
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "#e6e6e6",
  },
  text: {
    fontSize: 12,
    color: "#999",
    textAlign: "center",
  },
});
