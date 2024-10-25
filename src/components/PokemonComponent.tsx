import {FC} from "react";
import LoadingComponent from "./LoadingComponent";
import {PokemonComponentProps} from "@/types";
import Image from 'next/image';
import {Star} from 'lucide-react';

const PokemonComponent: FC<PokemonComponentProps> = ({pokemonData, loading, error, toggleFavorite, favorites}) => {
    if (!loading && !error && !pokemonData) {
        return (
            <div className="flex flex-col w-full h-3/4 items-center justify-center">
                <p className="text-gray-600 mt-4 text-m">
                    Try searching for a Pokémon by name.
                </p>
            </div>
        );
    }
    if (loading) {
        return (
            <div className="flex flex-col w-full h-3/4 items-center justify-center">
                <LoadingComponent />
            </div>
        );
    }
    if (error) {
        return (
            <div className="flex flex-col w-full h-3/4 items-center justify-center">
                <p className="text-red-500 mt-4 text-m">{error}</p>
            </div>
        );
    }
    if (pokemonData) {
        const {name, weight, height, game_indices, sprites} = pokemonData;
        return (
            <div className="flex flex-col md:flex-row items-center">
                <div className="bg-gray-50 rounded-lg shadow-md md:w-1/2">
                    <Image src={sprites?.front_default} alt={name} width={400} height={400} />
                </div>
                <div className="p-4 md:w-1/2">
                    <div className="flex justify-between items-center">
                        <h2 className="text-2xl text-gray-600 font-semibold capitalize">{name}</h2>
                        <Star onClick={() => toggleFavorite(name)} className={`w-6 h-6 cursor-pointer  ${!favorites.includes(name) ? 'text-gray-800' : 'text-blue-400'}`} />
                    </div>

                    <div className="mt-2 text-gray-600 flex justify-between text-xs/[16px]">
                        <div>      <p> <strong>Weight:</strong></p>
                            <div className="text-sm">{weight / 10} kg</div></div>
                        <div><p><strong>Height:</strong></p>
                            <div className="text-sm">{height / 10} m</div></div>
                    </div>
                    <div className="mt-2">
                        <strong className="text-gray-600 text-xs/[16px]">Versions:</strong>
                        <div className="flex flex-wrap gap-2 max-w-2xl">
                            {game_indices.map(({version}) => (
                                <span
                                    key={version.name}
                                    className="bg-[#DBF5FF] text-center rounded-xl p-2 text-gray-900 text-[12px] pl-4 pr-4 pt-[2px] pb-[2px]"
                                >
                                    {version.name}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

};

export default PokemonComponent;
