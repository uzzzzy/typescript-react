import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import Home from "../pages/home";

const App = () => {
  return (
    <Router>
      <App.Switch />
    </Router>
  );
};

App.Switch = () => {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
    </Switch>
  );
};

export default App;
