import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ModalContext } from "components/MyPokemon";

function Card(props) {
  const ctx = useContext(ModalContext);
  const pokemon = props.pokemon;

  // open modal and delete pokemon on modal CTA
  const triggerModal = () => {
    ctx.setReleasedPokemon(pokemon);
    ctx.openModal();
  };
  return (
    <div className="bg-white border-default border-pokedexBlue rounded transform transition duration-300 hover:scale-105">
      <div className="flex flex-col ">
        <div className="flex self-end p-2 cursor-pointer" onClick={triggerModal}>
          <FontAwesomeIcon icon="times-circle" className="text-gray-450" />
        </div>
        <div className="self-center">
          <img alt="pokemon" src={pokemon.sprites.front_default} className="w-20 h-20 tablet:w-40 tablet:h-40" />
        </div>
        <div className="w-full bg-pokedexBlue text-center rounded-b p-2">
          <p className="font-minecraft text-yellow-400 capitalize">{pokemon.nick}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
