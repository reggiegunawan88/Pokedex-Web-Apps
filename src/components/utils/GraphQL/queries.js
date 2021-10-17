import { gql } from "@apollo/client";

// all gql queries list, you can split this again after exceeding 300 lines of code
export const LOAD_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      results {
        url
        name
        image
      }
    }
  }
`;

export const POKEMON_DETAILS = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      height
      weight
      message
      abilities {
        ability {
          name
        }
      }
      moves {
        move {
          name
        }
      }
      types {
        type {
          name
        }
      }
      sprites {
        front_default
        front_female
        front_shiny
      }
      stats {
        effort
        base_stat
        stat {
          name
        }
      }
    }
  }
`;
