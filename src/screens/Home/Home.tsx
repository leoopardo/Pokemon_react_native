import {
  AppBar,
  Backdrop,
  BackdropSubheader,
  Icon,
  IconButton,
} from "@react-native-material/core";
import { StatusBar } from "expo-status-bar";
import { MotiImage } from "moti";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  Image,
  FlatList,
  ImageBackground,
} from "react-native";
import { Divider } from "react-native-paper";
import { useTheme } from "../../contexts/themeContext";
import {
  pokemon,
  pokemonData,
  pokemonDetails,
} from "../../interfaces/pokemons";
import { api } from "../../service/api";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { default_style } from "../../styles/styles";
import { MotiView } from "moti/build";

const INITIAL_QUERY = {
  limit: 20,
};

export const Home = () => {
  const { theme } = useTheme();

  const [data, setData] = useState<pokemonData | null>(null);
  const [pokeList, setPokeList] = useState<pokemonDetails[] | null>([]);
  const [isReveled, setIsReveled] = useState<number | null>();
  const [search, setSearch] = useState<string>("");
  const [pokeSide, setPokeSide] = useState<string>("front");
  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const fetchData = await api.get(`pokemon/${search}`, {
          params: INITIAL_QUERY,
        });
        if (search) {
          console.log(fetchData);
          setPokeList([fetchData.data]);
          return;
        }
        setData(fetchData.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPokemons();
  }, [search]);

  useEffect(() => {
    const getPokemon = async () => {
      if (data?.results) {
        const list = [];
        for (const p of data?.results) {
          const endpoint = p.url.split("/v2/")[1];
          const resp: {
            data: pokemonDetails;
          } = await api.get(endpoint);
          list.push(resp.data);
        }
        setPokeList(list);
      }
    };
    getPokemon();
  }, [data]);

  return (
    <View style={theme.container}>
      <StatusBar style="auto" />
      <FlatList
        style={{ width: "100%" }}
        data={pokeList}
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 0.5,
              width: "100%",
              backgroundColor: "#C8C8C8",
            }}
          />
        )}
        renderItem={({ item, index, separators }) => (
          <Backdrop
            revealed={isReveled === index}
            header={
              <AppBar
                style={theme.container}
                title={item.name}
                titleStyle={theme.text_m}
                leading={(props) => (
                  <IconButton
                    icon={(props) => (
                      <>
                        {isReveled === index && (
                          <MotiImage
                            from={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            resizeMode="cover"
                            style={{
                              backgroundColor: "white",
                              borderRadius: 100,
                              width: 50,
                              height: 50,
                              resizeMode: "contain",
                              margin: 8,
                            }}
                            source={{
                              uri: item.sprites?.front_default,
                            }}
                          />
                        )}
                        {isReveled !== index && (
                          <MotiView
                            from={{ opacity: isReveled === index ? 1 : 0 }}
                            animate={{
                              opacity: isReveled === index ? 0 : 1,
                            }}
                          >
                            <MaterialCommunityIcons
                              name="pokeball"
                              size={40}
                              color="red"
                            />
                          </MotiView>
                        )}
                      </>
                    )}
                    onPress={() => {
                      setPokeSide("front");
                      if (isReveled === index) {
                        setIsReveled(null);
                        return;
                      }
                      setIsReveled(index);
                    }}
                    {...props}
                  />
                )}
              />
            }
            backLayer={
              <MotiView
                from={{ height: 20 }}
                animate={{ height: isReveled === index ? 550 : 20 }}
              >
                <ImageBackground
                  source={require("../../img/background.jpg")}
                  resizeMode="cover"
                  style={{
                    height: "100%",
                    width: "100%",
                    position: "absolute",
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 30,
                      left: 120,
                      fontWeight: "600",
                    }}
                  >
                    {item.name}
                  </Text>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      padding: 10,
                    }}
                  >
                    <IconButton
                      icon={(props) => (
                        <MaterialCommunityIcons
                          name="sword-cross"
                          size={40}
                          color="purple"
                        />
                      )}
                      onPress={() => {
                        if (isReveled === index) {
                          setIsReveled(null);
                          return;
                        }
                        setIsReveled(index);
                      }}
                    />
                    <IconButton
                      icon={(props) => (
                        <MaterialCommunityIcons
                          name="rotate-360"
                          size={40}
                          color="red"
                        />
                      )}
                      onPress={() => {
                        if (isReveled === index) {
                          setPokeSide(pokeSide === "front" ? "back" : "front");
                        }
                      }}
                    />
                  </View>
                  {pokeSide === "front" && (
                    <MotiImage
                      from={{ opacity: pokeSide === "front" ? 0 : 1 }}
                      animate={{ opacity: pokeSide === "front" ? 1 : 0 }}
                      resizeMode="cover"
                      style={{
                        left: 18,
                        width: 300,
                        height: 300,
                        resizeMode: "contain",
                        margin: 8,
                      }}
                      source={{
                        uri: item.sprites?.front_default,
                      }}
                    />
                  )}
                  {pokeSide === "back" && (
                    <MotiImage
                      from={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      resizeMode="cover"
                      style={{
                        left: 18,
                        width: 300,
                        height: 300,
                        resizeMode: "contain",
                        margin: 8,
                      }}
                      source={{
                        uri: item.sprites?.back_default,
                      }}
                    />
                  )}
                </ImageBackground>
              </MotiView>
            }
          />
        )}
      />
    </View>
  );
};
