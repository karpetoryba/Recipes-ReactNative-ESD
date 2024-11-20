import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

export default function MealsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="random"
        options={{
          title: "Recette Aléatoire",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="fast-food" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Toutes les recettes",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="shuffle" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
