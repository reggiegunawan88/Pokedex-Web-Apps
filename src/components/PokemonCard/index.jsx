import { useContext } from "react/cjs/react.development";
import { PokemonContext } from "../PokemonList";

function PokemonCard(props) {
  const contextValue = useContext(PokemonContext);

  const choosePokemon = () => {
    contextValue.setPokemonThumbnail(props.data);
    contextValue.setPokemonID(props.idx + 1);
  };

  return (
    <div onClick={choosePokemon} className="flex-shrink-0 bg-gray-50 p-3 rounded mt-3 h-[fit-content] cursor-pointer">
      <img className="w-24 h-24 mx-auto" alt="bulbasaur" src={props.data.image} />
    </div>
  );
}

export default PokemonCard;
