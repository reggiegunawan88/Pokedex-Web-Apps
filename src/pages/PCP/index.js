import React, { useState, useEffect, createContext } from "react";
import Pokedex from "./components/Pokedex";
import { POKEMON_LIST } from "components/utils/GraphQL/queries";
import { useQuery } from "@apollo/client";

export const PokemonListContext = createContext();

/* Product Catalog Page */
function ListPage() {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonThumbnail, setPokemonThumbnail] = useState([]);
  const [pokemonID, setPokemonID] = useState(1);

  // pokemon list -> 1st gen only
  const gqlVar = {
    limit: 249,
    offset: 0,
  };
  // get pokemon data list with gql query
  const { error, loading, data } = useQuery(POKEMON_LIST, {
    variables: gqlVar,
  });
  if (error) {
    console.log(`Error! ${error.message}`);
  }

  useEffect(() => {
    if (data) {
      window.scrollTo(0, 0);
      setPokemonList(data.pokemons.results);
      setPokemonThumbnail(data.pokemons.results[0]); // pokemon thumbnail 1st idx
    }
  }, [data]);

  const ctxData = {
    pokemonList,
    pokemonThumbnail,
    pokemonID,
    loading,
    setPokemonThumbnail,
    setPokemonID,
  };

  return (
    <PokemonListContext.Provider value={ctxData}>
      <div className="pt-24 pb-10 w-full">
        <Pokedex />
      </div>
    </PokemonListContext.Provider>
  );
}

export default ListPage;
