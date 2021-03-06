import { useContext, useState, useEffect } from "react";
import { PokemonListContext } from "pages/PCP";
import { Link } from "react-router-dom";
import { hashedPokemonID } from "components/utils/helper/helper";

function Thumbnail() {
  const ctxValue = useContext(PokemonListContext); // get pokemon data from parent context
  const [pokemon, setPokemon] = useState([]);
  const [pokemonID, setPokemonID] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setPokemon(ctxValue.pokemonThumbnail);
    setPokemonID(hashedPokemonID(ctxValue.pokemonID));
    setIsLoading(ctxValue.loading);
  }, [ctxValue]);

  /* progressive rendering -> prevent bad CLS */
  const renderName = () => {
    if (isLoading) {
      return <div className="h-10 w-1/2 rounded bg-skeleton animate-pulse"></div>;
    } else {
      return <p className="font-bold font-minecraft text-3xl capitalize">{pokemon.name}</p>;
    }
  };
  const renderID = () => {
    if (isLoading) {
      return <div className="h-5 w-1/4 rounded bg-skeleton animate-pulse mt-2"></div>;
    } else {
      return <p className="text-lg font-minecraft mt-2">{pokemonID}</p>;
    }
  };
  const renderImage = () => {
    if (isLoading) {
      return <div className="w-60 h-60 tablet:w-80 tablet:h-80 rounded bg-skeleton animate-pulse"></div>;
    } else {
      return <img alt="bulbasaur" src={pokemon.image} className="w-60 h-60 tablet:w-80 tablet:h-80" />;
    }
  };
  const renderBtn = () => {
    if (isLoading) {
      return <div className="w-31 h-10 mt-2 rounded-full bg-skeleton animate-pulse"></div>;
    } else {
      return (
        <Link to={`/pokemon/${pokemon.name}`}>
          <div className="self-center bg-redBtn font-minecraft font-bold text-xl text-white px-7 py-2 rounded-full">DETAIL</div>
        </Link>
      );
    }
  };

  return (
    <div className="flex flex-col font-sans items-center self-center laptopM:order-2">
      {/* pokemon name and ID */}
      {renderName()}
      {renderID()}
      {/* img */}
      <div className="self-center mt-3">{renderImage()}</div>
      {/* btn details */}
      {renderBtn()}
    </div>
  );
}

export default Thumbnail;
