import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.scss";

import Graphic from "./components/Graphic/Graphic";
import Home from "./pages/Home";
import Thanks from "./pages/Thanks";
import PageNotFound from "./pages/404";

function App() {
  return (
    <div className="App">
      <Router>
        <Graphic />
        <Route exact path="/" component={Home} />
        <Route exact path="/thanks" component={Thanks} />
        <Route exact path="/404" component={PageNotFound} />
      </Router>
    </div>
  );
}

export default App;
