import React, { useContext } from "react";
import { MyPokemonContext } from "pages/inventory";
import Card from "./card";

function MyPokemonList() {
  const myPokemon = useContext(MyPokemonContext);

  return (
    <div className="w-full">
      <div className="flex flex-col text-center">
        <p className="font-minecraft">Pokemon Caught: {myPokemon.length}</p>
        <div className="grid grid-flow-col gap-x-3 mt-5 mx-4">
          {myPokemon.map((pokemon, i) => (
            <Card key={i} pokemon={pokemon} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyPokemonList;
