import React from "react";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Image, Text, View } from "react-native";
import { Switch, ListItem } from "@react-native-material/core";
import { useTheme } from "../../contexts/themeContext";
import { IconComponentProvider, Icon } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Button } from "react-native-paper";
import { default_style } from "../../styles/styles";


export const MenuComponent: React.FC<DrawerContentComponentProps> = (props) => {
  const { theme, setDarkTheme, setLightTheme } = useTheme();
  return (
    <View style={{ flex: 1, ...theme.menu }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          ...theme.menu,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Image
          borderRadius={10}
          resizeMode="cover"
          style={{ width: "80%", height: 200 }}
          source={require("../../img/menuHover.jpg")}
        />

        <View
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "flex-end",
            height: "15%",
            paddingRight: "5%",
          }}
        >
          {theme.theme === "dark" && (
            <IconComponentProvider IconComponent={MaterialCommunityIcons}>
              <Feather
                name="sun"
                size={24}
                color="#fff"
                onPress={setLightTheme}
              />
            </IconComponentProvider>
          )}

          <Switch
            value={theme.theme === "dark"}
            thumbColor={default_style.GREEN300}
            trackColor={{
              false: default_style.BLUE_GREY,
              true: default_style.GREEN100,
            }}
            onChange={() =>
              theme.theme === "dark" ? setLightTheme() : setDarkTheme()
            }
          />
          {theme.theme === "light" && (
            <IconComponentProvider IconComponent={MaterialCommunityIcons}>
              <FontAwesome
                name="moon-o"
                size={24}
                color="black"
                onPress={setDarkTheme}
              />
            </IconComponentProvider>
          )}
        </View>
        <View style={{ width: "100%" }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
    </View>
  );
};
