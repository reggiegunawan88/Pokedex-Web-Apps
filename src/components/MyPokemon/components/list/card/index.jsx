import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Card(props) {
  const pokemon = props.pokemon;
  return (
    <div className="bg-white border-default border-pokedexBlue rounded transform transition duration-300 hover:scale-105">
      <div className="flex flex-col ">
        <div className="flex self-end p-2 cursor-pointer">
          <FontAwesomeIcon icon="times-circle" className="text-gray-450" />
        </div>
        <div className="self-center">
          <img alt="pokemon" src={pokemon.sprites.front_default} className="w-15 h-15 tablet:w-20 tablet:h-20" />
        </div>
        <div className="w-full bg-pokedexBlue text-center rounded-b p-2">
          <p className="font-minecraft text-yellow-400 capitalize">{pokemon.nick}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
