import React, { useState, useEffect, createContext } from "react";
import { useQuery } from "@apollo/client";
import { useLocation } from "react-router";
import { getLastURLPath } from "components/utils/helper/helper";
import { POKEMON_DETAILS } from "components/utils/GraphQL/queries";
import PokemonDetail from "components/PokemonDetails";

export const PokemonDetailsContext = createContext();

/* Product Detail Page */
function DetailPage() {
  const [pokemon, setPokemon] = useState([]);
  const route = useLocation();

  const gqlVar = {
    name: getLastURLPath(route.pathname),
  };
  // get pokemon data gql
  const { error, loading, data } = useQuery(POKEMON_DETAILS, {
    variables: gqlVar,
  });
  if (error) {
    console.log(`Error! ${error.message}`);
  }

  useEffect(() => {
    if (data) {
      setPokemon(data.pokemon);
    }
  }, [data]);

  return (
    <PokemonDetailsContext.Provider value={{ pokemon, loading }}>
      <div className="pt-24 pb-10 w-full laptopM:pt-31">
        <PokemonDetail />
      </div>
    </PokemonDetailsContext.Provider>
  );
}

export default DetailPage;
