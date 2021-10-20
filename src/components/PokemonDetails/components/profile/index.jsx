import React, { useState, useEffect, useContext } from "react";
import { PokemonDetailsContext } from "pages/pdp/index";

function PokemonProfile() {
  const ctxValue = useContext(PokemonDetailsContext);
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    if (ctxValue.pokemon) {
      setPokemon(ctxValue.pokemon);
    }
  }, [ctxValue.pokemon]);

  /* progressive rendering */
  const renderTypes = () => {
    const elements = [];
    if (pokemon.length === 0) {
      return (
        <div className="flex flex-row gap-x-3 mt-2 justify-center">
          <div className="w-13 h-5 rounded bg-skeleton animate-pulse"></div>
          <div className="w-13 h-5 rounded bg-skeleton animate-pulse"></div>
        </div>
      );
    } else {
      pokemon.types.map((item, i) =>
        elements.push(
          <p key={i} className={`bg-skeleton text-white text-xs tablet:text-sm px-3 py-1 rounded-full font-bold uppercase`}>
            {item.type.name}
          </p>
        )
      );
      return elements;
    }
  };
  const renderImg = () => {
    if (pokemon.length === 0) {
      return <div className="w-37 h-37 rounded bg-skeleton animate-pulse tablet:w-50 tablet:h-50 tablet:justify-self-center tablet:mt-12"></div>;
    } else {
      return <img className="w-37 tablet:w-50 justify-self-center" alt={pokemon.name} src={pokemon.sprites.front_default} />;
    }
  };

  return (
    <div className="grid grid-cols-2 tablet:grid-cols-1">
      {/* pokemon name, types */}
      <div className="flex flex-col text-left place-self-center tablet:gap-y-2 tablet:text-center">
        {!ctxValue.loading ? (
          <p className="font-bold font-minecraft text-2xl tablet:text-3xl capitalize">{pokemon.name}</p>
        ) : (
          <div className="bg-skeleton h-5 w-full rounded skeleton animate-pulse"></div>
        )}
        <div className="flex flex-row gap-x-3 mt-2 justify-center">{renderTypes()}</div>
      </div>
      {renderImg()}
    </div>
  );
}

export default PokemonProfile;
