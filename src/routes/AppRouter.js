import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "pages/Home";
import ContentRoutes from "components/ContentRoutes";

function AppRouter() {
  return (
    <div className="min-h-screen bg-blue-100">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/*" component={ContentRoutes} />
        </Switch>
      </Router>
    </div>
  );
}

export default AppRouter;
