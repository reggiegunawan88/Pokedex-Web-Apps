import React, { useState, useEffect, createContext } from "react";
import MyPokemon from "components/MyPokemon";

export const MyPokemonContext = createContext();

/* My Pokemon Page */
function Inventory() {
  const [myPokemon, setMyPokemon] = useState([]);

  const getStoredPokemons = () => {
    const data = localStorage.getItem("myPokemon");
    data === null ? setMyPokemon([]) : setMyPokemon(JSON.parse(data));
  };

  useEffect(() => {
    getStoredPokemons();
  }, []);

  return (
    <MyPokemonContext.Provider value={myPokemon}>
      <div className="pt-20 pb-10 w-full">
        <MyPokemon />
      </div>
    </MyPokemonContext.Provider>
  );
}

export default Inventory;
