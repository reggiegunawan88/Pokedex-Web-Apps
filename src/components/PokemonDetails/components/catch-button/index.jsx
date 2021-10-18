import { useContext } from "react";
import { PokemonDetailsContext } from "pages/pdp/index";

function CatchButton() {
  const ctxValue = useContext(PokemonDetailsContext);
  const catchPokemon = () => {
    const chance = Math.random();
    if (chance < 0.5) {
      console.log("failed");
    } else {
      console.log("success");
      console.log("pokemon:" + ctxValue.pokemon.name);
    }
  };
  return (
    <button className="transform transition duration-300 hover:scale-125" onClick={catchPokemon}>
      <img alt="pokeball-catch" src="/assets/pokeball-catch.png" className="mx-auto" />
      <p className="font-minecraft text-xl font-bold text-redBtn">CATCH</p>
    </button>
  );
}

export default CatchButton;
