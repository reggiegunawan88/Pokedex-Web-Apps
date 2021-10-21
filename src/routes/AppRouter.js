import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "pages/Home";
import ContentRoutes from "components/ContentRoutes";

function AppRouter() {
  return (
    <Router>
      <div className="min-h-screen bg-blue-100">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/*" component={ContentRoutes} />
        </Switch>
      </div>
    </Router>
  );
}

export default AppRouter;
