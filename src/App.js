import React, { Component } from "react";

import {
  // BrowserRouter may not work as expected
  HashRouter as Router,
  // BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  NavLink as Link
} from "react-router-dom";

import "./App.scss";

import { BASEURL } from "./config/api";

/**IMPORT COMPONENTS */
import Footer from "./components/Footer/Footer";
// import Loader from "./components/Loader/Loader";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

/**IMPORT PAGES */
import Home from "./pages/Home";
import Thanks from "./pages/Thanks";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import PageNotFound from "./pages/404";
import ErrorComponent from "./pages/Error";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: false
    };
  }

  componentDidMount() {
    if (sessionStorage.getItem("token")) {
      this.authenticate();
    }
  }

  authenticate = () => {
    let token = sessionStorage.getItem("token");
    if (token) {
      fetch(`${BASEURL}/auth`, {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": token
        }
      })
        .then(res => res.json)
        .then(res => this.setState({ auth: res.auth }))
        //if incorrect token remove the token
        .catch(err => sessionStorage.removeItem("token"));
    }
  };

  handleLogin = (username, pw) => {
    fetch(`${BASEURL}/login`, {
      method: "post",
      body: JSON.stringify({
        username: username,
        password: pw
      }),
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (res.status === 403) {
          this.setState({
            wrong: true
          });
          return null;
        } else {
          return res.json();
        }
      })
      .then(res => {
        if (res.auth) {
          sessionStorage.setItem("token", res.token);
          this.setState({ auth: true });
        }
      })
      .catch(err =>
        this.setState({
          wrong: true
        })
      );
  };

  handleLogout = e => {
    sessionStorage.removeItem("token");
    this.setState({
      auth: false
    });
  };

  render() {
    return (
      <div className="App">
        <Router style={{ zIndex: "20" }}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/thanks" component={Thanks} />
            <ProtectedRoute
              exact
              path="/admin"
              auth={this.state.auth}
              component={Admin}
            />
            <Route
              exact
              path="/login"
              render={props => {
                if (!this.state.auth) {
                  return (
                    <Login error={this.state.wrong} login={this.handleLogin} />
                  );
                } else {
                  return <Redirect to="/admin" />;
                }
              }}
            />
            <Route component={PageNotFound} />
            <Route exact path="/error" component={ErrorComponent} />
            <div style={{ zIndex: 20, display: "flex" }}>
              {this.state.auth && (
                <p>
                  <button className="btn" onClick={this.handleLogout}>
                    Log out
                  </button>
                </p>
              )}
            </div>
          </Switch>
        </Router>
        {/* <Footer /> */}
      </div>
    );
  }
}
