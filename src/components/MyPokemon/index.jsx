import React, { useState, useEffect, useContext, createContext } from "react";
import { MyPokemonContext } from "pages/inventory";
import Loading from "./components/loading";
import MyPokemonList from "./components/list";
import EmptyState from "./components/emptyState";

export const myPokemonContext = createContext();

function MyPokemon() {
  const myPokemon = useContext(MyPokemonContext);
  const [loading, setLoading] = useState(true);
  const [modalRelease, setModalRelease] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return <div>{loading ? <Loading /> : myPokemon.length > 0 ? <MyPokemonList /> : <EmptyState />}</div>;
}

export default MyPokemon;
