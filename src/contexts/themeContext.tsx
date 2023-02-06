import React, { useContext, useState } from "react";
import CSS from "csstype";
import { default_style } from "../styles/styles";

type ThemeProviderType = {
  theme: {
    theme: string;
    container: any;
    text: any;
    menu: any;
    menuItemColor: any;
    menuTxtColor: any;
    text_s: any;
    text_m: any;
    text_g: any;
  };
  setDarkTheme: () => void;
  setLightTheme: () => void;
};

const ThemeContext = React.createContext({} as ThemeProviderType);

const ThemeProvider = ({ children }: any) => {
  const darkTheme = {
    theme: "dark",
    container: {
      flex: 1,
      backgroundColor: "#192124",
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      fontSize: 30,
      color: default_style.BLUE_WHITE,
    },
    text_s: {
      fontSize: 14,
      color: default_style.BLUE_WHITE,
    },
    text_m: {
      fontSize: 16,
      color: default_style.BLUE_WHITE,
    },
    text_g: {
      fontSize: 20,
      color: default_style.BLUE_WHITE,
    },
    menuItemColor: default_style.BLUE_WHITE,
    menuTxtColor: default_style.BLUE700,
    menu: {
      backgroundColor: "#2a2a28",
    },
  };
  const lightTheme = {
    theme: "light",
    text: {
      fontSize: 30,
      color: "black",
    },
    text_s: {
      fontSize: 14,
      color: "black",
    },
    text_m: {
      fontSize: 16,
      color: "black",
    },
    text_g: {
      fontSize: 20,
      color: "black",
    },
    container: {
      flex: 1,
      backgroundColor: default_style.BLUE_WHITE,
      alignItems: "center",
      justifyContent: "center",
    },
    menuItemColor: default_style.BLUE700,
    menuTxtColor: default_style.BLUE_WHITE,
    menu: {
      backgroundColor: default_style.WHITE,
    },
  };
  const [theme, setTheme] = useState(lightTheme);

  const setDarkTheme = () => {
    setTheme(darkTheme);
  };
  const setLightTheme = () => {
    setTheme(lightTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setDarkTheme,
        setLightTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};

export { ThemeProvider };
