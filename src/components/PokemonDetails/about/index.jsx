import React, { useEffect, useState, useContext } from "react";
import { PokemonDetailsContext } from "..";
import { hashedPokemonID } from "../../utils/helper/helper";
import PokemonStats from "./stats";

function PokemonStatus() {
  const [pokemon, setPokemon] = useState([]);
  const ctxValue = useContext(PokemonDetailsContext);

  useEffect(() => {
    if (ctxValue.pokemon) {
      setPokemon(ctxValue.pokemon);
    }
  }, [ctxValue.pokemon]);

  const renderAbout = () => {
    if (pokemon.length === 0) {
      // skeleton
      return (
        <div className="flex flex-col gap-y-4">
          <div className="w-1/2 h-3 bg-grey-40 animate-pulse rounded-full"></div>
          <div className="w-1/2 h-3 bg-grey-40 animate-pulse rounded-full"></div>
          <div className="w-1/2 h-3 bg-grey-40 animate-pulse rounded-full"></div>
          <div className="w-1/2 h-3 bg-grey-40 animate-pulse rounded-full"></div>
        </div>
      );
    } else {
      // show data
      return (
        <div className="flex flex-col gap-y-1">
          <p>{hashedPokemonID(pokemon.id)}</p>
          <p>{pokemon.height} m</p>
          <p>{pokemon.weight} lbs</p>
          {pokemon.abilities.map((item, i) => {
            return (
              <p key={i} className="w-max bg-grey-30 px-2 rounded-lg font-semibold capitalize shadow-xs">
                {item.ability.name}
              </p>
            );
          })}
        </div>
      );
    }
  };

  return (
    <div className="flex flex-col gap-y-4">
      {/* Pokemon about */}
      <div className="flex flex-col">
        <div className="w-full bg-blue-100 px-2 rounded">
          <p className="font-minecraft text-blue-500 text-sm font-bold py-1 tablet:text-xl">About</p>
        </div>
        <div className="font-sans grid grid-cols-2 px-2 mt-2">
          <div className="flex flex-col font-bold gap-y-1">
            <p>ID</p>
            <p>Height</p>
            <p>Weight</p>
            <p>Abilities</p>
          </div>
          {renderAbout()}
        </div>
      </div>
      {/* Pokemon stats */}
      <div className="flex flex-col">
        <div className="w-full bg-blue-100 px-2 rounded">
          <p className="font-minecraft text-blue-500 text-sm font-bold py-1 tablet:text-xl">Stats</p>
        </div>
        <PokemonStats />
      </div>
    </div>
  );
}

export default PokemonStatus;
