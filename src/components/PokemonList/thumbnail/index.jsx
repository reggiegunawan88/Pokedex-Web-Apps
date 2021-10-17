import { useContext, useState, useEffect } from "react";
import { PokemonContext } from "../index";
import { Link } from "react-router-dom";
import { hashedPokemonID } from "../../utils/helper/helper";

function Thumbnail() {
  const contextValue = useContext(PokemonContext); // get pokemon data from parent context
  const [pokemon, setPokemon] = useState([]);
  const [pokemonID, setPokemonID] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setPokemon(contextValue.pokemonThumbnail);
    setPokemonID(hashedPokemonID(contextValue.pokemonID));
    setIsLoading(contextValue.loading);
  }, [contextValue]);

  /* progressive rendering -> prevent bad CLS */
  const renderName = () => {
    if (isLoading) {
      return <div className="h-10 w-1/2 rounded bg-grey-40 animate-pulse"></div>;
    } else {
      return <p className="font-bold font-minecraft text-3xl capitalize">{pokemon.name}</p>;
    }
  };
  const renderID = () => {
    if (isLoading) {
      return <div className="h-5 w-1/4 rounded bg-grey-40 animate-pulse mt-2"></div>;
    } else {
      return <p className="text-lg font-minecraft mt-2">{pokemonID}</p>;
    }
  };
  const renderImage = () => {
    if (isLoading) {
      return <div className="w-80 h-80 rounded bg-grey-40 animate-pulse"></div>;
    } else {
      return <img alt="bulbasaur" src={pokemon.image} className="w-80 h-80" />;
    }
  };
  const renderBtn = () => {
    if (isLoading) {
      return <div className="w-31 h-10 mt-2 rounded-full bg-grey-40 animate-pulse"></div>;
    } else {
      return <button className="bg-redBtn font-minecraft font-bold text-xl text-white px-7 py-2 rounded-full">DETAIL</button>;
    }
  };

  return (
    <div className="flex flex-col font-sans items-center laptopM:order-2">
      {/* pokemon name and ID */}
      {renderName()}
      {renderID()}
      {/* img */}
      <div className="self-center mt-10">{renderImage()}</div>
      {/* btn details */}
      <Link to="/pokemon" className="self-center">
        {renderBtn()}
      </Link>
    </div>
  );
}

export default Thumbnail;
