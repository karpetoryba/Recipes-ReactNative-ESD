import { Tabs } from "expo-router";
// pour pouvoir naviger entre les differents ecrans.
export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Accueil" }} />
      <Tabs.Screen name="liste" options={{ headerShown: false }} />
    </Tabs>
  );
}
