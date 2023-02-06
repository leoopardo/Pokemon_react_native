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

export interface pokemonDetails {
  abilities?: abilityObj[];
  base_experience?: number;
  forms?: pokemon[];
  game_indices?: { game_index: number; version: version }[];
  heigth?: number;
  id?: number;
  is_default?: boolean;
  location_area_encounters?: string;
  moves?: {
    move?: move;
    version_group_details?: {
      level_learned_at?: number;
      move_lear_method?: { name?: string; url?: string };
      version?: { name?: string; url?: string };
    }[];
  }[];
  name?: string;
  order?: number;
  sprites?: {
    back_default?: string;
    back_female?: string;
    back_shiny?: string;
    back_shiny_female?: string;
    front_default?: string;
    front_female?: string;
    front_shiny?: string;
    front_shiny_female?: string;
  };
  stats?: {
    base_stat: number;
    effort: number;
    stat: stat;
  };
  weigth?: number;
}

export interface stat {
  name: string;
  url: string;
}

export interface move {
  name: string;
  url: string;
}

export interface version {
  name: string;
  url: string;
}

export interface abilityObj {
  ability: ability;
  is_hidden: boolean;
  slot: number;
}

export interface ability {
  name: string;
  url: string;
}
