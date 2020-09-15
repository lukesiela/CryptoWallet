import React from "react";
import Login from "./layouts/Login";
import Landing from "./layouts/Landing";
import { Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
      <div className="App">
          <Switch>
              <Route exact path="/" children={<Login/>} />
              <Route path="/home" children={<Landing/>} />
          </Switch>
      </div>
  );
}

export default App;
