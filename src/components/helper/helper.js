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
