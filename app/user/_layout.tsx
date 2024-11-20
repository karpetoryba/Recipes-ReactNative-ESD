import { createDrawerNavigator } from "@react-navigation/drawer";
import { Text, View } from "react-native";

function UserProfileDrawerItem() {
  return (
    <View>
      <Text>User</Text>
    </View>
  );
}

function UserSettingsDrawerItem() {
  return (
    <View>
      <Text>Paramètres</Text>
    </View>
  );
}

export default function UserDrawerLayout() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator>
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
