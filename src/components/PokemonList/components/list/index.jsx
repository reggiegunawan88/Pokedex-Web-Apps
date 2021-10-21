import React, { useState, useContext } from "react";
import { PokemonListContext } from "pages/PCP";
import LazyLoading from "components/PokemonCard/components/lazyLoading";
import PokemonCard from "components/PokemonCard";
import "./index.css";

function PokemonList() {
  const ctxValue = useContext(PokemonListContext);
  const [itemsPerPage, setItemsPerPage] = useState(20);

  // load more btn func
  const loadMore = () => setItemsPerPage(itemsPerPage + 20);

  // lazy load rendering, prevent bad CLS score
  const renderPokemonList = () => {
    const lists = [];
    if (ctxValue.loading) {
      for (let i = 0; i < itemsPerPage; i++) {
        lists.push(<LazyLoading key={i} />);
      }
    } else {
      ctxValue.pokemonList.slice(0, itemsPerPage).map((pokemon, i) => lists.push(<PokemonCard key={i} data={pokemon} idx={i} />));
    }
    return lists;
  };

  return (
    <div className="flex overflow-x-auto whitespace-nowrap gap-x-3 mx-6 laptopM:grid laptopM:grid-cols-4 laptopM:h-110">
      {renderPokemonList()}
      <div className="col-span-4 mt-3 mx-auto">
        <button onClick={loadMore} className="font-sans font-bold text-pokedexBlue border-2 border-pokedexBlue shadow-lg p-5 rounded h-full">
          <p>Load More</p>
        </button>
      </div>
    </div>
  );
}

export default PokemonList;
