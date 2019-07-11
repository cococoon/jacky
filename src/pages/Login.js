import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
export default class Login extends Component {
  render() {
    return (
      <div style={{ zIndex: 20 }}>
        <Formik>
          <Form>
            <Field type="text" placeholder="username" />
            <Field type="password" placeholder="password" />
          </Form>
        </Formik>
      </div>
    );
  }
}
