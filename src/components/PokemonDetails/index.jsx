import React, { useState, useEffect, createContext } from "react";
import { useQuery } from "@apollo/client";
import { useLocation } from "react-router";
import { getLastURLPath } from "../utils/helper/helper";
import { POKEMON_DETAILS } from "../utils/GraphQL/queries";
import PokemonProfile from "./components/profile";
import PokemonAbout from "./components/about";
import CatchButton from "./components/catch-button";
import SnackbarSuccess from "./components/snackbar/success";
import SnackbarFailed from "./components/snackbar/failed";
import Modal from "./components/modal";

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
      {/* <SnackbarSuccess /> */}
      <SnackbarFailed />
      {/* <Modal /> */}
      <div className="h-full max-w-xl mx-auto">
        <div className="flex flex-col bg-white mx-4 rounded-lg shadow-md px-4 py-3">
          <div className="grid grid-cols-1 gap-y-2 tablet:grid-cols-2">
            <PokemonProfile />
            <PokemonAbout />
          </div>
        </div>
        <div className="w-full text-center mt-6">
          <CatchButton />
        </div>
      </div>
    </PokemonDetailsContext.Provider>
  );
}

export default PokemonDetails;
