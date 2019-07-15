import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import { BASEURL } from "../config/api";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: false
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentDidMount() {
    let token = sessionStorage.getItem("token");
    if (token) {
      //if token is already set, try to authenticate the user
      fetch(`${BASEURL}/auth`, {
        method: "post",
        body: token,
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(res => {
          this.setState({
            isAuth: true
          });
        })
        .catch(err => {
          sessionStorage.removeItem("token");
        });
    }
  }

  render() {
    return (
      <Formik>
        <div>
          <Form
            onSubmit={e => {
              e.preventDefault();
              console.log(this.state);
              const { username, pw } = this.state;
              this.props.login(username, pw);
            }}
          >
            <Field
              type="text"
              placeholder="username"
              name="username"
              onChange={this.handleChange}
            />
            <Field
              type="password"
              placeholder="password"
              name="pw"
              onChange={this.handleChange}
            />
            <button className="btn" type="submit">
              Login
            </button>
          </Form>
        </div>
      </Formik>
    );
  }
}
