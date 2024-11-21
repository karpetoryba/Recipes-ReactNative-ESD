import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const CreateMealScreen = () => {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");

  const handleCreate = async () => {
    await fetch("https://www.themealdb.com/api/json/v1/1/create.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        ingredients,
      }),
    });
  };

  const handleSubmit = () => {
    handleCreate();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Créer une recette</Text>

      <Text style={styles.label}>Nom de la recette</Text>
      <TextInput
        style={styles.input}
        placeholder="Entrez le nom"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Ingrédients</Text>
      <TextInput
        style={[styles.input, styles.multilineInput]}
        placeholder="Liste des ingrédients"
        value={ingredients}
        onChangeText={setIngredients}
        multiline
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Créer la recette</Text>
      </TouchableOpacity>
    </View>
  );
};

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
    color: "#388e3c",
    textAlign: "center",
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: "#2e7d32",
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#4caf50",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  multilineInput: {
    height: 100,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: "#4caf50",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 16,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default CreateMealScreen;
