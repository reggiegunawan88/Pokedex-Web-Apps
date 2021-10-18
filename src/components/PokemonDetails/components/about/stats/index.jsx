import React, { useContext } from "react";
import { PokemonDetailsContext } from "pages/pdp/index";
import Meterbar from "../meterbar";

function PokemonStats() {
  const pokemonData = useContext(PokemonDetailsContext);

  /* progressive rendering */
  const renderPokemonStats = () => {
    const elements = [];
    const pokemonStats = pokemonData.pokemon.stats;
    if (pokemonStats !== undefined) {
      pokemonStats.map((data, i) =>
        elements.push(
          <tr key={i}>
            <td className="w-1/2 capitalize">{data.stat.name}</td>
            <td>
              <Meterbar value={data.base_stat} />
            </td>
          </tr>
        )
      );
    } else {
      for (let i = 0; i < 5; i++) {
        elements.push(<div className="h-5 bg-grey-40 animate-pulse my-3 rounded"></div>);
      }
    }
    return elements;
  };

  return (
    <table className="table-auto mx-2 my-2 font-bold">
      <tbody>{renderPokemonStats()}</tbody>
    </table>
  );
}

export default PokemonStats;
