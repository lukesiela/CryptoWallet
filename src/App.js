import React from 'react';
import Login from "./layouts/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './App.css';

function App() {
  return (
      <Router>
          <div className="App">
              <Switch>
                  <Route path="/">
                      <Login />
                  </Route>
                  <Route path="/home">

                  </Route>
              </Switch>
          </div>
      </Router>
  );
}

export default App;
