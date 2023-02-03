import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ThemeProvider, useTheme } from "../../src/contexts/themeContext";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Home } from "../../src/screens/Home/Home";
import { MenuIcon } from "../../src/components/MenuIcon/MenuIcon";
import { MenuComponent } from "../../src/components/MenuComponent/MenuComponent";
import { WhoIsThisPokemon } from "../../src/screens/WhoIs/WhoIsThisPokemon";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default function Screens() {
  const { theme } = useTheme();
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: true,
          headerLeft: () => <MenuIcon />,
          drawerActiveBackgroundColor: theme.menuItemColor,
          drawerInactiveTintColor: theme.menuItemColor,
          drawerActiveTintColor: theme.menuTxtColor,
          drawerLabelStyle: {
            marginLeft: -24,
            fontSize: 16,
          },
        }}
        drawerContent={(props) => <MenuComponent {...props} />}
      >
        <Drawer.Screen
          name="Pokedex"
          component={Home}
          options={{
            drawerIcon: ({ color }) => (
              <MaterialCommunityIcons name="pokeball" size={24} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Who is this pokemon"
          component={WhoIsThisPokemon}
          options={{
            drawerIcon: ({ color }) => (
              <AntDesign name="question" size={24} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
