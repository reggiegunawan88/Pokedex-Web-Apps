import React, { useState, useEffect, createContext } from "react";
import MyPokemon from "./components/MyPokemon/index.js";
import { getCaughtPokemon } from "components/utils/helper/helper";

export const MyPokemonContext = createContext();

/* My Pokemon Page */
function Inventory() {
  const [myPokemon, setMyPokemon] = useState([]);

  const getStoredPokemons = () => {
    const data = getCaughtPokemon();
    data === null ? setMyPokemon([]) : setMyPokemon(data);
  };

  useEffect(() => {
    getStoredPokemons();
  }, []);

  return (
    <MyPokemonContext.Provider value={myPokemon}>
      <div className="pt-24 pb-10 w-full">
        <MyPokemon />
      </div>
    </MyPokemonContext.Provider>
  );
}

export default Inventory;
