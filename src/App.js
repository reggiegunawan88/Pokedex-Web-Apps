import AppRouter from "./config/router";
import "components/utils/FontAwesomeIcons";
import { client } from "components/utils/GraphQL/setup";
import { ApolloProvider } from "@apollo/client";

function App() {
  return (
    <ApolloProvider client={client}>
      <AppRouter />
    </ApolloProvider>
  );
}

export default App;
