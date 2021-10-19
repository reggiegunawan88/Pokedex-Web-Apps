import React, { useState, useEffect, useContext, createContext } from "react";
import { MyPokemonContext } from "pages/inventory";
import Loading from "./components/loading";
import MyPokemonList from "./components/list";
import EmptyState from "./components/emptyState";
import Modal from "./components/modal";

export const ModalContext = createContext();

function MyPokemon() {
  const myPokemon = useContext(MyPokemonContext);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  const data = {
    myPokemon,
    modal,
    openModal,
    closeModal,
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <ModalContext.Provider value={data}>
      <Modal />
      <div>{loading ? <Loading /> : myPokemon.length > 0 ? <MyPokemonList /> : <EmptyState />}</div>;
    </ModalContext.Provider>
  );
}

export default MyPokemon;
