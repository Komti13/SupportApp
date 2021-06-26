
import './App.css';
import Login from './components/Login'
import SignUp from './components/SignUp.tsx'
import Home from './components/Home'
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import AddTicket from './components/AddTicket';
import EditTicket from './components/EditTicket';
import AddReplie from './components/AddReplie';
import FirstPage from './components/FirstPage';

function App() {
  return (
    <div>
      <BrowserRouter>

        <div className="container">
          <Switch>
            {/* Routing */}
            <Route exact path="/" component={FirstPage} />
            <Route path="/signIn" component={Login} />
            <Route path="/signUp" component={SignUp} />
            <Route path="/home" component={Home} />
            <Route path="/add" component={AddTicket} />
            <Route path="/edit/:id" component={EditTicket} />
            <Route path="/addreplie/:id" component={AddReplie} />


          </Switch>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
