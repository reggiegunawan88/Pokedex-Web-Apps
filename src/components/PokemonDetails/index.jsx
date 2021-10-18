import React, { useState, createContext } from "react";
import PokemonProfile from "./components/profile";
import PokemonAbout from "./components/about";
import CatchButton from "./components/catch-button";
import SnackbarSuccess from "./components/snackbar/success";
import SnackbarFailed from "./components/snackbar/failed";
import Modal from "./components/modal";

export const userInteractionContext = createContext();

function PokemonDetails() {
  /**
   * states -> contains user interaction result
   * ex -> open/close snackbar and modal, etc
   */
  const [snackbarSuccess, setSnackbarSuccess] = useState(false);
  const [snackbarFailed, setSnackbarFailed] = useState(false);
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  const openSnackbarSuccess = () => {
    setSnackbarSuccess(true);
  };
  const closeSnackbarSuccess = () => {
    setSnackbarSuccess(false);
  };

  const openSnackbarFailed = () => {
    setSnackbarFailed(true);
  };
  const closeSnackbarFailed = () => {
    setSnackbarFailed(false);
  };

  // data provide by parent context to child
  const data = {
    snackbarSuccess,
    snackbarFailed,
    modal,
    openModal,
    closeModal,
    openSnackbarSuccess,
    closeSnackbarSuccess,
    openSnackbarFailed,
    closeSnackbarFailed,
  };

  return (
    <userInteractionContext.Provider value={data}>
      <SnackbarSuccess />
      <SnackbarFailed />
      <div className="h-full max-w-xl mx-auto">
        <div className="flex flex-col bg-white mx-4 rounded-lg shadow-md px-4 py-3">
          <div className="grid grid-cols-1 gap-y-2 tablet:grid-cols-2">
            <PokemonProfile />
            <PokemonAbout />
          </div>
        </div>
        <div className="w-full text-center mt-6">
          <CatchButton />
        </div>
        <Modal />
      </div>
    </userInteractionContext.Provider>
  );
}

export default PokemonDetails;
