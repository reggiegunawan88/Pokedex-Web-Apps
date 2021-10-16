import "./components/FontAwesomeIcons";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/main/index.jsx";
import PCP from "./pages/pcp/index.jsx";
import PDP from "./pages/pdp/index.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Fragment } from "react";
import { client } from "./components/GraphQL/setup";
import { ApolloProvider } from "@apollo/client";

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="min-h-screen bg-blue-100">
          <Switch>
            <Route exact path="/" component={Home} />
            <Fragment>
              <Header />
              <Route path="/pokedex" component={PCP} />
              <Route path="/pokemon" component={PDP} />
            </Fragment>
            <Footer />
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
