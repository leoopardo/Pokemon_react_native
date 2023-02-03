import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { View, Text, Button, Image } from "react-native";
import { useTheme } from "../../contexts/themeContext";
import { pokemon, pokemonData } from "../../interfaces/pokemons";
import { api } from "../../service/api";

export const Home = () => {
  const { theme } = useTheme();

  const [data, setData] = useState<pokemonData | null>(null);
  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const fetchData = await api.get("pokemon", { params: { limit: 10 } });
        setData(fetchData.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPokemons();
  }, []);

  const getPokemon = async (url: string) => {
    const endpoint = url.split("/v2/")[1];
    const data: { data: { sprites: { front_shiny: string } } } = await api.get(
      endpoint
    );
    return data.data.sprites.front_shiny;
  };

  getPokemon("https://pokeapi.co/api/v2/pokemon/4/");

  return (
    <View style={theme.container}>
      <StatusBar style="auto" />
      {data?.results?.map((p: pokemon) => (
        <>
          <Image
            borderRadius={10}
            resizeMode="cover"
            style={{ width: "80%", height: 200 }}
            source={() => getPokemon(p.url)}
          />
          <Text style={theme.text}>{p.name}</Text>
        </>
      ))}
    </View>
  );
};
