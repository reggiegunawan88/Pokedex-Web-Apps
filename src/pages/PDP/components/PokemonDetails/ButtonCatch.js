import { useContext } from "react";
import { userInteractionContext } from "pages/PDP/components";

function CatchButton() {
  const interaction = useContext(userInteractionContext);

  // 50% probability chance
  const catchPokemon = () => {
    const chance = Math.random();
    if (chance < 0.5) {
      interaction.openSnackbarFailed();
      interaction.closeSnackbarSuccess();
    } else {
      interaction.closeSnackbarSuccess();
      interaction.closeSnackbarFailed();
      interaction.openModal();
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
