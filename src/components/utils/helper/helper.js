/* helpers for reusable function */

export const hashedPokemonID = (id) => {
  let result = "#";
  if (id < 10) {
    result += "00" + id;
  } else if (id < 100) {
    result += "0" + id;
  } else {
    result += id;
  }
  return result;
};

/**
 * ex input: /pokemon/bulbasaur
 * @returns bulbasaur
 */
export const getLastURLPath = (url) => {
  return url.substring(url.lastIndexOf("/") + 1);
};

// save pokemon to local storage
export const savePokemonToStorage = (key, newPokemon) => {
  let myPokemons = JSON.parse(localStorage.getItem("myPokemon") || "[]");

  // return: true || false
  const similarNickname = myPokemons.some((pokemon) => pokemon.nick.toLowerCase() === newPokemon.nick.toLowerCase());
  if (similarNickname) {
    return false;
  } else {
    myPokemons.push(newPokemon);
    localStorage.setItem(key, JSON.stringify(myPokemons));
    return true;
  }
};

// delete pokemon from local storage
export const deletePokemon = (pokemon) => {
  let catchedPokemon = JSON.parse(localStorage.getItem("myPokemon"));
  let newData = catchedPokemon.filter((item) => item.nick !== pokemon.nick);
  // set new data to storage
  localStorage.setItem("myPokemon", JSON.stringify(newData));
};

// get caught pokemon length
export const getCaughtPokemon = () => {
  const storedPokemon = JSON.parse(localStorage.getItem("myPokemon"));
  return storedPokemon === null ? null : storedPokemon;
};
