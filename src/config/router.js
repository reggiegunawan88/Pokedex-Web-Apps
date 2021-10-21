import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Fragment } from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import Home from "pages/Home";
import PCP from "pages/PCP";
import PDP from "pages/PDP";
import Inventory from "pages/Inventory";

function AppRouter() {
  return (
    <Router>
      <div className="min-h-screen bg-blue-100">
        <Switch>
          <Route exact path="/" component={Home} />
          <Fragment>
            <Header />
            <Route path="/pokedex" component={PCP} />
            <Route path="/pokemon/:name" component={PDP} />
            <Route path="/myPokemon" component={Inventory} />
          </Fragment>
          <Footer />
        </Switch>
      </div>
    </Router>
  );
}

export default AppRouter;
