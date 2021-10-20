import React, { useState, useEffect, createContext } from "react";
import PokemonList from "components/PokemonList";
import { LOAD_POKEMONS } from "components/utils/GraphQL/queries";
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
  const { error, loading, data } = useQuery(LOAD_POKEMONS, {
    variables: gqlVar,
  });

  useEffect(() => {
    if (data) {
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
        <PokemonList />
      </div>
    </PokemonListContext.Provider>
  );
}

export default ListPage;
