import React, { createContext } from "react";
import PokemonProfile from "./components/profile";
import PokemonAbout from "./components/about";
import CatchButton from "./components/catch-button";
import SnackbarSuccess from "./components/snackbar/success";
import SnackbarFailed from "./components/snackbar/failed";
import Modal from "./components/modal";

// export const PokemonDetailsContext = createContext();

function PokemonDetails() {
  return (
    <div className="h-full max-w-xl mx-auto">
      {/* <SnackbarSuccess />
      <SnackbarFailed /> */}
      {/* <Modal /> */}
      <div className="flex flex-col bg-white mx-4 rounded-lg shadow-md px-4 py-3">
        <div className="grid grid-cols-1 gap-y-2 tablet:grid-cols-2">
          <PokemonProfile />
          <PokemonAbout />
        </div>
      </div>
      <div className="w-full text-center mt-6">
        <CatchButton />
      </div>
    </div>
  );
}

export default PokemonDetails;
