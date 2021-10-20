import { getCaughtPokemon } from "components/utils/helper/helper";
import React, { useEffect, useState } from "react";
import List from "./components/list";
import Thumbnail from "./components/thumbnail";

function PokemonList() {
  const [totalPokemon, setTotalPokemon] = useState(0);
  useEffect(() => {
    setTotalPokemon(getCaughtPokemon());
  }, []);

  return (
    <div className="flex flex-col gap-y-7 laptopM:grid laptopM:grid-flow-col-dense laptopM:gap-x-4 laptopM:mt-5 laptop:mx-6">
      <Thumbnail />
      {/* pokemon list grid */}
      <div className="laptopM:bg-white laptopM:rounded-lg laptopM:shadow-lg laptopM:p-7 laptopM:h-auto">
        <div className="flex flex-row w-full gap-x-2 justify-center px-4 my-2 items-center">
          <hr className="border-b border-pokedexBlue w-full" />
          <div className="flex flex-col text-center">
            <p className="font-minecraft font-bold text-pokedexBlue mx-2 text-lg laptopM:text-2xl whitespace-nowrap">Pokemon List</p>
            <p className="font-minecraft font-bold text-pokedexBlue mx-2 text-base laptopM:text-xl whitespace-nowrap">( Caught: {totalPokemon} )</p>
          </div>
          <hr className="border-b border-pokedexBlue w-full" />
        </div>
        <List />
      </div>
    </div>
  );
}

export default PokemonList;
