"use client";
import {useState, useEffect, ChangeEvent} from "react";
import {PokemonProps} from "@/types";
import PokemonComponent from "./PokemonComponent";
import FavoritePokemon from "./Favorite";
import Image from 'next/image';

const SearchPokemon = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [pokemonData, setPokemonData] = useState<PokemonProps | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);
    const [favorites, setFavorites] = useState<string[]>([]);

    const toggleFavorite = (pokemonName: string) => {
        setFavorites(prevFavorites => {
            if (prevFavorites.includes(pokemonName)) {
                return prevFavorites.filter(name => name !== pokemonName);
            } else {
                return [...prevFavorites, pokemonName];
            }
        });
    };

    // Debouncing logic: delay search for 300ms after user stops typing
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedTerm(searchTerm);
        }, 300);

        return () => {
            clearTimeout(handler);
        };
    }, [searchTerm]);

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchTerm(value);
        if (value === '') {
            setError(null);
            setPokemonData(null);
        }
    };

    const handleSearch = async (term: string) => {

        setLoading(true);

        await new Promise((resolve) => setTimeout(resolve, 500)); // 500ms delay

        try {
            setError(null);
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${term.toLowerCase()}`);
            if (!response.ok) {
                throw new Error("Pokémon not found!");
            }
            const data: PokemonProps = await response.json();
            setPokemonData(data);
            setLoading(false);
        } catch (error) {
            setError(`${error}. Please try again.`);
            setPokemonData(null);
            setLoading(false);
        }
    };


    return (
        <>
            <div className="p-10 flex flex-col items-center justify-center bg-gradient-to-br from-[#0E749D] via-[#0E749D] to-[#30A7D7]">
                <Image
                    src="/images/pokemonIcon.png"
                    alt="Pokemon Icon"
                    width={150}
                    height={80}
                    className="py-4"
                />
                <div className="bg-white flex flex-col items-center min-h-96 w-[80%] rounded-lg p-8 shadow-md">
                    <div className="relative w-full max-w-md mt-3">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 4.35a7.5 7.5 0 010 10.65z" />
                            </svg>
                        </span>
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={handleSearchChange}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    handleSearch(debouncedTerm);
                                }
                            }}
                            maxLength={50}
                            className="text-gray-600 pl-10 pr-16 py-1 w-full border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Search"
                        />
                        <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 text-sm">
                            {searchTerm.length}/50
                        </span>
                    </div>
                    <div className={!pokemonData ? "pt-20" : 'pt-4'} >
                        <PokemonComponent pokemonData={pokemonData} error={error} loading={loading} toggleFavorite={toggleFavorite} favorites={favorites} />
                    </div>
                </div>
            </div>
            <div className="pb-10 pr-32 pl-32 "><FavoritePokemon favorites={favorites} /></div>
        </>
    );
};

export default SearchPokemon;
