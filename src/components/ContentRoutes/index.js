import Header from "components/Header";
import PCP from "pages/PCP";
import PDP from "pages/PDP";
import Inventory from "pages/Inventory";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function ContentRoutes() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/pokedex" component={PCP} />
        <Route path="/pokemon/:name" component={PDP} />
        <Route path="/myPokemon" component={Inventory} />
      </Switch>
    </Router>
  );
}

export default ContentRoutes;
