import React, { useState, useEffect, createContext } from "react";
import List from "./list";
import Thumbnail from "./thumbnail";
import { useQuery } from "@apollo/client";
import { LOAD_POKEMONS } from "../utils/GraphQL/queries";

export const PokemonContext = createContext();

function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonThumbnail, setPokemonThumbnail] = useState([]);
  const [pokemonID, setPokemonID] = useState(1);

  // pokemon list -> 1st gen only
  const gqlVar = {
    limit: 249,
    offset: 0,
  };
  // get pokemon data list with gql query
  const { error, loading, data } = useQuery(LOAD_POKEMONS, {
    variables: gqlVar,
  });

  useEffect(() => {
    if (data) {
      setPokemonList(data.pokemons.results);
      setPokemonThumbnail(data.pokemons.results[0]);
    }
  }, [data]);

  return (
    <PokemonContext.Provider value={{ pokemonList, pokemonThumbnail, pokemonID, loading, setPokemonThumbnail, setPokemonID }}>
      <div className="flex flex-col gap-y-7 laptopM:grid laptopM:grid-flow-col-dense laptopM:mt-5">
        <Thumbnail />
        {/* pokemon list grid */}
        <div className="laptopM:bg-white laptopM:rounded-lg laptopM:shadow-lg laptopM:p-7 laptopM:ml-5 laptopM:h-auto">
          <div className="flex flex-row w-full gap-x-2 justify-center px-4 my-2 items-center">
            <hr className="border-b border-pokedexBlue w-full" />
            <p className="font-minecraft font-bold text-pokedexBlue mx-2 text-lg laptopM:text-2xl whitespace-nowrap">Pokemon List</p>
            <hr className="border-b border-pokedexBlue w-full" />
          </div>
          {/* pokemon list */}
          <List />
        </div>
      </div>
    </PokemonContext.Provider>
  );
}

export default PokemonList;
