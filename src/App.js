import "./components/FontAwesomeIcons";
import Home from "./pages/main/index.jsx";
import PCP from "./pages/pcp/index.jsx";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-blue-100">
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/pokedex" component={PCP} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
