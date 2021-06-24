import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import SignUp from './components/SignUp.tsx'
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/signIn">Login</Link>
          </li>
          <li>
            <Link to="/signUp">Register</Link>
          </li>
        </ul>
        <div className="container">
          <Switch>
            <Route path="/signIn" component={Login} />
            <Route path="/signUp" component={SignUp} />
          </Switch>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
