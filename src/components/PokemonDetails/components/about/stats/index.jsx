import React, { useContext } from "react";
import { PokemonDetailsContext } from "pages/pdp/index";
import Meterbar from "../meterbar";

function PokemonStats() {
  const pokemonData = useContext(PokemonDetailsContext);

  /* skeleton rendering */
  const renderSkeleton = () => {
    const elements = [];
    for (let i = 0; i < 5; i++) {
      elements.push(
        <div key={i} className="grid grid-cols-2 my-3 gap-x-4">
          <div className="h-3 bg-skeleton animate-pulse rounded"></div>
          <div className="h-3 bg-skeleton animate-pulse rounded"></div>
        </div>
      );
    }
    return elements;
  };
  const renderPokemonStats = () => {
    const elements = [];
    const pokemonStats = pokemonData.pokemon.stats;
    pokemonStats.map((data, i) =>
      elements.push(
        <tr key={i} className="gap-x-4">
          <td className="w-1/2 capitalize">{data.stat.name}</td>
          <td>
            <Meterbar value={data.base_stat} />
          </td>
        </tr>
      )
    );
    return elements;
  };

  return (
    <div>
      {pokemonData.pokemon.length === 0 ? (
        <div className="flex flex-col">{renderSkeleton()}</div>
      ) : (
        <table className="table-auto w-full my-2 font-bold">
          <tbody>{renderPokemonStats()}</tbody>
        </table>
      )}
    </div>
  );
}

export default PokemonStats;
