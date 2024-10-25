import {Favorites} from "@/types";
import {X} from "lucide-react";
import {FC} from "react";

const FavoritePokemon: FC<Favorites> = ({favorites}) => {
    return (
        <div className="mt-8">
            <h3 className="text-xl font-bold mb-4 text-gray-600">Favorite</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {favorites.length > 0 && favorites.map((pokemon: string) => (
                    <div key={pokemon} className="flex justify-between items-center bg-[#DBF5FF] pl-3 pr-3 pt-1 pb-1 rounded-lg text-gray-600">
                        <span>{pokemon}</span>
                        <X className="w-5 h-5 text-gray-400" />
                    </div>
                ))}
            </div>
        </div>
    );
};
export default FavoritePokemon;