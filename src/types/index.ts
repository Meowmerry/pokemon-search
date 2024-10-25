
export interface PokemonComponentProps {
    pokemonData: PokemonProps | null;
    toggleFavorite: (pokemonName: string) => void;
    favorites: string[];
    loading: boolean;
    error: string | null;
}
export interface Favorites {
    favorites: string[];
}
export interface PokemonProps {
    game_indices: Index[];
    height: number;
    name: string;
    sprites: Sprites;
    weight: number;
}

export interface Index {
    game_index: number;
    version: Version;
}

export interface Version {
    name: string;
    url: string;
}

export interface HeldItem {
    item: Item;
    version_details: VersionDetail[];
}

export interface Item {
    name: string;
    url: string;
}

export interface VersionDetail {
    rarity: number;
    version: Version2;
}

export interface Version2 {
    name: string;
    url: string;
}

export interface Mfe {
    move: Move;
    version_group_details: VersionGroupDetail[];
}

export interface Move {
    name: string;
    url: string;
}

export interface VersionGroupDetail {
    level_learned_at: number;
    move_learn_method: MoveLearnMethod;
    version_group: VersionGroup;
}

export interface MoveLearnMethod {
    name: string;
    url: string;
}

export interface VersionGroup {
    name: string;
    url: string;
}

export interface Species {
    name: string;
    url: string;
}

export interface Sprites {
    front_default: string;
    versions: Versions;
}



export interface Versions {
    "generation-i": GenerationI;
    "generation-ii": GenerationIi;
    "generation-iii": GenerationIii;
    "generation-iv": GenerationIv;
    "generation-v": GenerationV;
    "generation-vi": GenerationVi;
    "generation-vii": GenerationVii;
    "generation-viii": GenerationViii;
}

export interface GenerationI {
    "red-blue": RedBlue;
    yellow: Yellow;
}

export interface RedBlue {
    back_default: string;
    back_gray: string;
    back_transparent: string;
    front_default: string;
    front_gray: string;
    front_transparent: string;
}

export interface Yellow {
    back_default: string;
    back_gray: string;
    back_transparent: string;
    front_default: string;
    front_gray: string;
    front_transparent: string;
}

export interface GenerationIi {
    crystal: Crystal;
    gold: Gold;
    silver: Silver;
}

export interface Crystal {
    back_default: string;
    back_shiny: string;
    back_shiny_transparent: string;
    back_transparent: string;
    front_default: string;
    front_shiny: string;
    front_shiny_transparent: string;
    front_transparent: string;
}

export interface Gold {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
    front_transparent: string;
}

export interface Silver {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
    front_transparent: string;
}

export interface GenerationIii {
    emerald: Emerald;
    "firered-leafgreen": FireredLeafgreen;
    "ruby-sapphire": RubySapphire;
}

export interface Emerald {
    front_default: string;
    front_shiny: string;
}

export interface FireredLeafgreen {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
}

export interface RubySapphire {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
}

export interface GenerationIv {
    "diamond-pearl": DiamondPearl;
    "heartgold-soulsilver": HeartgoldSoulsilver;
    platinum: Platinum;
}

export interface DiamondPearl {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
}

export interface HeartgoldSoulsilver {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
}

export interface Platinum {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
}

export interface GenerationV {
    "black-white": BlackWhite;
}

export interface BlackWhite {
    animated: Animated;
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
}

export interface Animated {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
}

export interface GenerationVi {
    "omegaruby-alphasapphire": OmegarubyAlphasapphire;
    "x-y": XY;
}

export interface OmegarubyAlphasapphire {
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
}

export interface XY {
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
}

export interface GenerationVii {
    icons: Icons;
    "ultra-sun-ultra-moon": UltraSunUltraMoon;
}

export interface Icons {
    front_default: string;
    front_female: null;
}

export interface UltraSunUltraMoon {
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
}

export interface GenerationViii {
    icons: Icons2;
}

export interface Icons2 {
    front_default: string;
    front_female: string;
}

export interface Stat2 {
    name: string;
    url: string;
}

