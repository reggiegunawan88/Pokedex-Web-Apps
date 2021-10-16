import React, { useState, useContext } from "react";
import LazyLoading from "../../PokemonCard/lazyLoading";
import PokemonCard from "../../PokemonCard";
import { PokemonContext } from "../index";
import "./index.css";

function PokemonList() {
  const contextValue = useContext(PokemonContext);
  const [itemsPerPage, setItemsPerPage] = useState(20);

  // load more btn func
  const loadMore = () => setItemsPerPage(itemsPerPage + 20);

  // lazy load rendering, prevent bad CLS score
  const renderPokemonList = () => {
    const lists = [];
    if (contextValue.loading) {
      for (let i = 0; i < itemsPerPage; i++) {
        lists.push(<LazyLoading key={i} />);
      }
    } else {
      contextValue.pokemonList.slice(0, itemsPerPage).map((pokemon, i) => lists.push(<PokemonCard key={i} data={pokemon} idx={i} />));
    }
    return lists;
  };

  return (
    <div className="flex overflow-x-auto whitespace-nowrap gap-x-3 mx-2 laptopM:grid laptopM:grid-cols-4 laptopM:h-110">
      {renderPokemonList()}
      <div className="col-span-4 mt-6 mx-auto">
        <button onClick={loadMore} className="bg-redBtn font-sans font-bold text-white px-7 py-2 rounded-full">
          Load More
        </button>
      </div>
    </div>
  );
}

export default PokemonList;
