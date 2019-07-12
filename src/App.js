import React, { Component } from "react";

import { HashRouter as Router, Route, NavLink as Link } from "react-router-dom";

import "./App.scss";

/**IMPORT COMPONENTS */
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";

/**IMPORT PAGES */
import Home from "./pages/Home";
import Thanks from "./pages/Thanks";
import Admin from "./pages/Admin";
import PageNotFound from "./pages/404";
import ErrorComponent from "./pages/Error";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Router style={{ zIndex: "20" }}>
          <Route exact path="/" component={Home} />
          <Route exact path="/thanks" component={Thanks} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/404" component={PageNotFound} />
          <Route exact path="/error" component={ErrorComponent} />
          <div style={{ zIndex: 20, display: "flex" }}>
            <p style={{ margin: "20px" }}>
              <Link to="/admin">ADMIN</Link>
            </p>
            <p style={{ margin: "20px" }}>
              <Link to="/">CARD</Link>
            </p>
            <p style={{ margin: "20px" }}>
              <Link to="/thanks">THANKS</Link>
            </p>
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}
