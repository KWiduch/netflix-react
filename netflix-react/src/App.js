import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { HomeScreen } from "./screens/HomeScreen/HomeScreen";
import { ProfileScreen } from "./screens/ProfileScreen/ProfileScreen";
import { RegisterScreen } from "./screens/RegisterScreen/RegisterScreen";

function App() {
  const user = null;
  return (
    <div className="App">
      <Router>
        {!user ? (
          <RegisterScreen />
        ) : (
          <Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
          </Switch>
        )}
        <Switch>
          <Route path="/profile">
            <ProfileScreen />
          </Route>
          <Route path="/register">
            <RegisterScreen />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
