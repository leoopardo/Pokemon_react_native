import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { ThemeProvider, useTheme } from "./src/contexts/themeContext";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createDrawerNavigator } from "@react-navigation/drawer";
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
