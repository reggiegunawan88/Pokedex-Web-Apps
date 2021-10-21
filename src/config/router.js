import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Fragment } from "react";
import Header from "components/header";
import Footer from "components/footer";
import Home from "components/Home";
import PCP from "pages/pcp";
import PDP from "pages/pdp";
import Inventory from "pages/inventory";

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
            <Route path="/my-pokemon" component={Inventory} />
          </Fragment>
          <Footer />
        </Switch>
      </div>
    </Router>
  );
}

export default AppRouter;
