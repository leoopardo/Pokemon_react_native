import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ThemeProvider, useTheme } from "./src/contexts/themeContext";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Home } from "./src/screens/Home/Home";
import { MenuIcon } from "./src/components/MenuIcon/MenuIcon";
import { MenuComponent } from "./src/components/MenuComponent/MenuComponent";
import { WhoIsThisPokemon } from "./src/screens/WhoIs/WhoIsThisPokemon";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Screens from "./src/screens";

export default function App() {
  const { theme } = useTheme();
  const Drawer = createDrawerNavigator();

  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <Screens />
        <StatusBar style="auto" />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
