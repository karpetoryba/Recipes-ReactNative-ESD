import { Stack } from "expo-router";
// pour pouvoir naviger entre les differents ecrans.
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
