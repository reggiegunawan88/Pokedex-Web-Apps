import { useEffect, useState, useContext } from "react/cjs/react.development";
import { PokemonDetailsContext } from "..";
import { hashedPokemonID } from "../../utils/helper/helper";

function PokemonStatus() {
  const [pokemon, setPokemon] = useState([]);
  const contextValue = useContext(PokemonDetailsContext);

  useEffect(() => {
    if (contextValue.pokemon) {
      setPokemon(contextValue.pokemon);
    }
  }, [contextValue.pokemon]);

  const renderStatus = () => {
    console.log(pokemon);
    if (pokemon.length === 0) {
      // show data
      return (
        <div className="flex flex-col gap-y-4">
          <div className="w-1/2 h-3 bg-grey-40 animate-pulse rounded-full"></div>
          <div className="w-1/2 h-3 bg-grey-40 animate-pulse rounded-full"></div>
          <div className="w-1/2 h-3 bg-grey-40 animate-pulse rounded-full"></div>
          <div className="w-1/2 h-3 bg-grey-40 animate-pulse rounded-full"></div>
        </div>
      );
    } else {
      // skeleton loading
      console.log(pokemon.abilities);
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
          {renderStatus()}
        </div>
      </div>
      {/* Pokemon moves */}
      <div className="flex flex-col">
        <div className="w-full bg-blue-100 px-2 rounded">
          <p className="font-minecraft text-blue-500 text-sm font-bold py-1 tablet:text-xl">Stats</p>
        </div>
        <div className="font-sans grid grid-cols-2 px-2 mt-2">
          <div className="flex flex-col gap-y-1 font-bold">
            <p>HP</p>
            <p>Attack</p>
            <p>Defence</p>
            <p>Special-ATK</p>
            <p>Special-DEF</p>
            <p>Speed</p>
          </div>
          <div className="flex flex-col gap-y-1">
            <p>Spesies</p>
            <p>Height</p>
            <p>Weight</p>
            <p>Abilities</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonStatus;
