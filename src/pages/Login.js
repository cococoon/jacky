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

  render() {
    return (
      <Formik>
        <div>
          <Form
            onSubmit={e => {
              e.preventDefault();
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
            {this.props.error && (
              <p style={{ color: "red" }}>Wrong username or password</p>
            )}
          </Form>
        </div>
      </Formik>
    );
  }
}
