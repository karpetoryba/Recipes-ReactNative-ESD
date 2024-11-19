import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Accueil" }} />
      <Stack.Screen
        name="liste/index"
        options={{ title: "Liste des recettes" }}
      />
      <Stack.Screen
        name="liste/[id]"
        options={{ title: "Détails d'un recette" }}
      />
    </Stack>
  );
}
