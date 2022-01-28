import React, { useState, useEffect, useContext } from "react";
import { PokemonDetailsContext } from "pages/PDP";
import { userInteractionContext } from "pages/PDP/components";
import { savePokemonToStorage } from "components/utils/helper/helper";
import "./index.css";

function Modal() {
  const data = useContext(PokemonDetailsContext);
  const interaction = useContext(userInteractionContext);

  const [nickname, setNickname] = useState("");
  const [catchStatus, setCatchStatus] = useState(null);

  useEffect(() => {}, [catchStatus]);

  const savePokemon = () => {
    const pokemon = data.pokemon;
    if (nickname !== "") {
      let newPokemon = { ...pokemon, nick: nickname };
      const catchStatus = savePokemonToStorage("myPokemon", newPokemon);
      setCatchStatus(catchStatus);
      if (catchStatus) {
        interaction.closeModal();
        interaction.openSnackbarSuccess();
        return true;
      } else {
        return false;
      }
    }
  };

  return (
    <>
      {interaction.modal && (
        <div className="fade-in">
          <div className="fixed bg-gray-500 top-0 bottom-0 right-0 left-0 content-none z-50 opacity-75"></div>
          <div className="fade-in absolute max-w-sm w-full z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="flex flex-col bg-white mx-4 px-4 py-9 text-center rounded-lg">
              <p className="font-sans text-xl font-bold">
                Nice Catch! <br /> Give your Pokemon a nickname.
              </p>
              <div className="flex flex-col mt-6 text-center">
                <input className="w-full h-10 border-default border-grey-30 p-3 outline-none" placeholder="Pokemon nickname" onChange={(e) => setNickname(e.target.value)} />
                <p className={"font-sans text-sm text-redBtn mt-3 font-bold " + (catchStatus === false ? "visible" : "hidden")}>You have to give different nickname for the Pokemon.</p>
              </div>
              <button className="bg-redBtn w-full py-3 mt-10 rounded-full" onClick={savePokemon}>
                <p className="font-minecraft text-lg text-white font-semibold">SAVE</p>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
