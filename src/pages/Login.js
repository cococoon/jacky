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

  // componentDidMount() {
  //   let token = sessionStorage.getItem("token");
  //   if (token) {
  //     //if token is already set, try to authenticate the user
  //     fetch(`${BASEURL}/auth`, {
  //       method: "get",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "x-access-token": token
  //       }
  //     })
  //       .then(res => {
  //         return res.json();
  //       })
  //       .then(res => {
  //         this.setState({
  //           isAuth: true
  //         });
  //       })
  //       .catch(err => {
  //         sessionStorage.removeItem("token");
  //       });
  //   }
  // }

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
