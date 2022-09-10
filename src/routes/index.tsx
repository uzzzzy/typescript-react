import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<>Home</>} />
      </Switch>
    </Router>
  );
};

export default App;
