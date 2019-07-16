import React, { Component } from "react";
import { Formik, Form, Field } from "formik";

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
              style={{ display: "block", width: "100%" }}
              type="text"
              placeholder="username"
              name="username"
              onChange={this.handleChange}
            />
            <Field
              style={{ display: "block", width: "100%" }}
              type="password"
              placeholder="password"
              name="pw"
              onChange={this.handleChange}
            />
            <button
              style={{ display: "block", width: "100%" }}
              className="btn"
              type="submit"
            >
              Login
            </button>
            {this.props.error && (
              <p style={{ color: "red" }}>Wrong username or password</p>
            )}
            {this.props.servererror && (
              <p style={{ color: "red" }}>404 server not responding</p>
            )}
          </Form>
        </div>
      </Formik>
    );
  }
}
