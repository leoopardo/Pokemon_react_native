import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, Button } from "react-native";
import { useTheme } from "../../contexts/themeContext";

export const WhoIsThisPokemon = () => {
  const { theme } = useTheme();

  // const [data, setData] = useState<any>();
  // useEffect(() => {
  //   const fetchPokemons = async () => {
  //     try {
  //       const fetchData = await api.get("pokemon", { params: { limit: 1000 } });
  //       setData(fetchData.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchPokemons();
  // }, []);
  // console.log(data);
  return (
    <View style={theme.container}>
      <StatusBar style="auto" />
      <Text style={theme.text}>?</Text>
    </View>
  );
};
