import React, { useState, useEffect, useContext, createContext } from "react";
import { MyPokemonContext } from "pages/Inventory";
import LoadingScreen from "../LoadingScreen";
import ListCard from "./components/ListCard";
import EmptyState from "../EmptyState";
import ModalRelease from "../ModalRelease";

export const ModalContext = createContext();

function MyPokemon() {
  const myPokemon = useContext(MyPokemonContext);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [releasedPokemon, setReleasedPokemon] = useState([]);

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  const data = {
    myPokemon,
    modal,
    releasedPokemon,
    openModal,
    closeModal,
    setReleasedPokemon,
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <ModalContext.Provider value={data}>
      <ModalRelease />
      {loading ? <LoadingScreen /> : myPokemon.length > 0 ? <ListCard /> : <EmptyState />}
    </ModalContext.Provider>
  );
}

export default MyPokemon;
