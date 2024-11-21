import { createDrawerNavigator } from "@react-navigation/drawer";
import { Text, View, StyleSheet } from "react-native";

function UserProfileDrawerItem() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.text}>Profil de l'utilisateur</Text>
    </View>
  );
}

function UserSettingsDrawerItem() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.text}>Paramètres</Text>
    </View>
  );
}

export default function UserDrawerLayout() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#000" },
        headerTintColor: "#4caf50",
        drawerStyle: { backgroundColor: "#111" },
        drawerActiveTintColor: "#4caf50",
        drawerInactiveTintColor: "#ccc",
        drawerLabelStyle: { fontSize: 16 },
      }}
    >
      <Drawer.Screen
        name="index"
        component={UserProfileDrawerItem}
        options={{ title: "Profil" }}
      />
      <Drawer.Screen
        name="parameters"
        component={UserSettingsDrawerItem}
        options={{ title: "Paramètres" }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#4caf50",
    fontSize: 20,
    fontWeight: "600",
  },
});
