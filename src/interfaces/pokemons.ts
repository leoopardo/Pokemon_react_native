export interface pokemonData {
  count: number;
  next: string;
  previous: string;
  results: pokemon[];
}

export interface pokemon {
  name: string;
  url: string;
}
