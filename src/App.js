import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages';
import Chat from './pages/chat';
import Myaccount from './pages/Myaccount';
import Login from './Logingpage/Login';
import Register from './Logingpage/Register';
function App() {
  return (
    <div className="app">
    <Router>
      <Switch>
        <Route path="/" exact component={Register}>
        </Route>
      </Switch>
      <Switch>
        <Route path="/login" component={Login}>
        </Route>
      </Switch>
    </Router>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component = {Home} />
        <Route path='/home' component = {Home} />
        <Route path='/chat' component = {Chat} />
        <Route path='/my_account' component = {Myaccount} />
        {/* <Route path='/logout' exact component = {Logout} /> */}
      </Switch>
    </Router>
    </div>

  );
}
export default App;