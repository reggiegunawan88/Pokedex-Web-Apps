import React, { useContext } from "react";
import { PokemonListContext } from "pages/pcp";

function PokemonCard(props) {
  const ctxValue = useContext(PokemonListContext);

  // call func to context parent
  const choosePokemon = () => {
    ctxValue.setPokemonThumbnail(props.data);
    ctxValue.setPokemonID(props.idx + 1);
  };

  return (
    <div onClick={choosePokemon} className="flex-shrink-0 bg-pokemonCard p-3 rounded mt-3 h-[fit-content] cursor-pointer">
      <img className="w-24 h-24 mx-auto" alt="bulbasaur" src={props.data.image} />
    </div>
  );
}

export default PokemonCard;
