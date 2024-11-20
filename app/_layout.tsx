import { Stack } from "expo-router";
// pour pouvoir naviger entre les differents ecrans.
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Accueil" }} />
      <Stack.Screen name="liste" options={{ headerShown: false }} />
    </Stack>
  );
}
