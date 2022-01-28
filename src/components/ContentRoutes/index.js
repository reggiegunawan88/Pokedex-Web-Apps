import Header from "components/Header";
/**
 * PCP (Product Catalog Page) => Pokedex List page
 * PDP (Product Detail Page) => Pokemon Details page
 * Inventory => My Pokemon page
 */
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
        <Route path="/my-pokemon" component={Inventory} />
      </Switch>
    </Router>
  );
}

export default ContentRoutes;
