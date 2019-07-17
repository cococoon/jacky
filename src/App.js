import React, { Component } from "react";

import {
  // BrowserRouter may not work as expected
  HashRouter as Router,
  // BrowserRouter as Router,
  Route,
  Redirect,
  Switch
  // NavLink as Link
} from "react-router-dom";

/**IMPORT STYLES */
import "./App.scss";
import "./style/scss/_utils.scss";

/**IMPORT CONFIG */
import { BASEURL } from "./config/api";

/**IMPORT COMPONENTS */
// import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Card from "./components/Card/Card";

/**IMPORT PAGES */
//Home is a useless component at the moment, replaced with Card
// import Home from "./pages/Home";
import Thanks from "./pages/Thanks";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import PageNotFound from "./pages/404";
import ErrorComponent from "./pages/Error";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: false,
      isLoading: true
    };
  }

  componentDidMount() {
    this.authenticate();
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
        .then(res => {
          return res.json();
        })
        .then(res => {
          this.setState({ auth: res.auth, isLoading: false });
        })
        //if incorrect token remove the token
        .catch(err => sessionStorage.removeItem("token"));
    } else {
      this.setState({ isLoading: false });
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
        if (res) {
          this.setState({
            serverError: false
          });
        }
        if (res.status === 401) {
          this.setState({
            wrong: true
          });
          return (res.auth = false);
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
      .catch(err => {
        this.setState({
          serverError: true
        });
      });
  };

  handleLogout = e => {
    sessionStorage.removeItem("token");
    this.setState({
      auth: false
    });
  };

  handleGuessResponse = guess => {
    this.setState({
      guess: guess
    });
  };

  render() {
    if (this.state.isLoading) {
      return (
        <div className="App">
          <Loader />
        </div>
      );
    } else {
      return (
        <div className="App">
          <Router style={{ zIndex: "20" }}>
            <Switch>
              <Route
                exact
                className="fadeIn"
                path="/"
                render={props => {
                  return (
                    <Card handleGuessResponse={this.handleGuessResponse} />
                  );
                }}
              />
              <Route
                exact
                response={this.state.response}
                path="/thanks"
                render={props => {
                  return <Thanks guess={this.state.guess} />;
                }}
              />
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
                      <Login
                        error={this.state.wrong}
                        servererror={this.state.serverError}
                        login={this.handleLogin}
                      />
                    );
                  } else {
                    return <Redirect to="/admin" />;
                  }
                }}
              />
              <Route component={PageNotFound} />
              <Route exact path="/error" component={ErrorComponent} />
            </Switch>
          </Router>
          <div style={{ zIndex: 20, display: "flex" }}>
            {this.state.auth && (
              <p>
                <button className="btn" onClick={this.handleLogout}>
                  Log out
                </button>
              </p>
            )}
          </div>
          {/* <Footer /> */}
        </div>
      );
    }
  }
}
