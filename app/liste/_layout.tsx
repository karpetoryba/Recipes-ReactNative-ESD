import { Stack } from "expo-router";

export default function MealsLayout() {
  return (
    <Stack>
      <Stack.Screen name="[id]" options={{ title: "Recette" }} />
      <Stack.Screen name="search/[query]" options={{ title: "Recherche" }} />
      <Stack.Screen
        name="search/index"
        options={{ title: "Voir le recette" }}
      />
      <Stack.Screen name="random" options={{ title: "Recette random" }} />
      <Stack.Screen
        name="tabs"
        options={{ title: "Tabs", headerShown: false }}
      />
    </Stack>
  );
}