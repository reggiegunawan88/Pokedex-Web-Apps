import React, { useContext } from "react";
import { MyPokemonContext } from "pages/inventory";
import Card from "./card";

function MyPokemonList() {
  const myPokemon = useContext(MyPokemonContext);

  return (
    <div className="flex flex-col text-center">
      <p className="font-minecraft text-2xl">Pokemon Caught: {myPokemon.length}</p>
      <div className="grid grid-cols-3 tablet:grid-cols-4 laptopM:grid-cols-5 gap-x-3 gap-y-4 mt-5 mx-4 laptopM:mx-31">
        {myPokemon.map((pokemon, i) => (
          <Card key={i} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}

export default MyPokemonList;
