import React, { useState, useEffect, createContext } from "react";
import { useQuery } from "@apollo/client";
import PokemonProfile from "./profile";
import { useLocation } from "react-router";
import { getLastURLPath } from "../utils/helper/helper";
import { POKEMON_DETAILS } from "../utils/GraphQL/queries";
import PokemonStatus from "./about";

export const PokemonDetailsContext = createContext();

function PokemonDetails() {
  const [pokemon, setPokemon] = useState([]);
  const route = useLocation();

  const gqlVar = {
    name: getLastURLPath(route.pathname),
  };
  // get pokemon data gql
  const { error, loading, data } = useQuery(POKEMON_DETAILS, {
    variables: gqlVar,
  });

  useEffect(() => {
    if (data) {
      setPokemon(data.pokemon);
    }
  }, [data]);

  return (
    <PokemonDetailsContext.Provider value={{ pokemon, loading }}>
      <div className="h-full max-w-xl mx-auto">
        <div className="flex flex-col bg-white mx-4 rounded-lg shadow-md px-4 py-3">
          <div className="grid grid-cols-1 gap-y-4 tablet:grid-cols-2">
            <PokemonProfile />
            <PokemonStatus />
          </div>
        </div>
        <div className="w-full text-center mt-6">
          <button>
            <img alt="pokeball-catch" src="/assets/pokeball-catch.png" className="mx-auto" />
            <p className="font-minecraft text-xl font-bold text-redBtn">CATCH</p>
          </button>
        </div>
      </div>
    </PokemonDetailsContext.Provider>
  );
}

export default PokemonDetails;
