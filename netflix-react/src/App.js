import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { HomeScreen } from "./screens/HomeScreen/HomeScreen";
import { ProfileScreen } from "./screens/ProfileScreen/ProfileScreen";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomeScreen />
          </Route>
          <Route path="/profile">
            <ProfileScreen />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
