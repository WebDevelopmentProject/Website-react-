import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
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
    </div>
  );
}
export default App;
