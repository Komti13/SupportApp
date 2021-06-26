import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import SignUp from './components/SignUp.tsx'
import Home from './components/Home'

import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Tickets from './components/Tickets';
import AddTicket from './components/AddTicket';
import EditTicket from './components/EditTicket';

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <ul>
          <li>
            <Link to="/home">Logout</Link>
          </li>
          
        </ul> */}
        <div className="container">
          <Switch>
            <Route path="/signIn" component={Login} />
            <Route path="/signUp" component={SignUp} />
            <Route path="/home" component={Home} />
            <Route path="/add" component={AddTicket} />
            <Route path="/edit/:id" component={EditTicket} />




          </Switch>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
