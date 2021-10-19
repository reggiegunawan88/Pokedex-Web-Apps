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
