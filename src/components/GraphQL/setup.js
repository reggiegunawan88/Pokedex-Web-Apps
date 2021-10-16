import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

// define error message
const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});

// define uri resource
const link = from([errorLink, new HttpLink({ uri: "https://graphql-pokeapi.vercel.app/api/graphql" })]);

// inject uri resource to client
export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});
