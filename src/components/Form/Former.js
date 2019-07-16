import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { BASEURL } from "../../config/api";
import { Formik, Field, Form } from "formik";
import DatePicker from "react-datepicker";

// import Button from "../Button/Button";

import "react-datepicker/dist/react-datepicker.css";
// import nl from "date-fns/esm/locale/nl";

import "./Form.scss";
import "../Button/Button.scss";

// registerLocale("be", nl);

export default class Former extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Jacky",
      submitted: false,
      date: new Date(2019, 9, 27)
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    let value = e.target.value;
    this.setState({
      [e.target.name]: value
    });
  };

  handleDateChange = date => {
    this.setState({
      date: date
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    let {
      city,
      date,
      email,
      firstName,
      lastName,
      houseNumber,
      length,
      name,
      postalCode,
      street,
      weight
    } = this.state;
    date = date.toLocaleDateString();
    fetch(`${BASEURL}/submit`, {
      method: "POST",
      body: JSON.stringify({
        city,
        date,
        email,
        firstName,
        lastName,
        houseNumber,
        length,
        name,
        postalCode,
        street,
        weight
      }),
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        return response.json();
      })
      .then(response => {
        console.log(response);

        this.setState({
          submitted: true
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    if (this.state.submitted) {
      return <Redirect to="/thanks" />;
    } else {
      return (
        <Formik
          initialValues={{
            name: "Jacky",
            length: "",
            weight: "",
            firstName: "",
            lastName: "",
            email: "",
            street: "",
            houseNumber: "",
            city: "",
            postalCode: ""
          }}
          onSubmit={(values, actions) => {
            fetch(`${BASEURL}/submit`, {
              method: "POST",
              body: JSON.stringify(this.state),
              mode: "cors",
              headers: {
                "Content-Type": "application/json"
              }
            })
              .then(response => {
                return response.json();
              })
              .then(response => {
                actions.setSubmitting(false);
                this.setState({
                  submitted: true
                });
              })
              .catch(err => {
                actions.setSubmitting(false);
                actions.setErrors(err.json());
              });
          }}
          render={({ errors, status, touched, isSubmitting }) => (
            <Form onSubmit={this.handleSubmit}>
              <h2>Guess my name</h2>
              <Field
                required
                type="text"
                name="name"
                className="name"
                autoComplete="off"
                onChange={this.handleChange}
                value={this.state.name}
              />
              <h2>{this.state.name} will be born on</h2>
              <DatePicker
                selected={this.state.date}
                onChange={this.handleDateChange}
                name="date"
                dateFormat="dd/MM/yyyy"
                placeholderText={this.state.date}
                minDate={new Date(2019, 8, 1)}
                maxDate={new Date(2019, 10, 29)}
                className="datepicker"
                withPortal
              />
              <h2>How tall will {this.state.name} be?</h2>
              <label htmlFor="length">
                {this.state.length ? this.state.length + " cm" : "length"}
              </label>
              <Field
                required
                autoComplete="off"
                type="range"
                min="40.00"
                max="65.00"
                step="0.1"
                name="length"
                onChange={this.handleChange}
                value={this.state.height}
              />
              <h2>How much will {this.state.name} weigh?</h2>
              <label htmlFor="weight">
                {this.state.weight ? this.state.weight + " kg" : "weight"}
              </label>
              <Field
                required
                type="range"
                autoComplete="off"
                min="2.00"
                max="5.00"
                step="0.01"
                name="weight"
                onChange={this.handleChange}
                value={this.state.weight}
              />
              <h2>Personal info</h2>
              <Field
                required
                autoComplete="off"
                type="text"
                name="firstName"
                placeholder="first name"
                onChange={this.handleChange}
                value={this.state.firstName}
              />
              <Field
                required
                autoComplete="off"
                type="text"
                name="lastName"
                placeholder="last name"
                onChange={this.handleChange}
                value={this.state.lastName}
              />
              <Field
                required
                type="email"
                name="email"
                autoComplete="off"
                placeholder="email"
                onChange={this.handleChange}
                value={this.state.email}
              />
              <Field
                required
                autoComplete="off"
                type="text"
                name="street"
                placeholder="street"
                onChange={this.handleChange}
                value={this.state.street}
              />
              <Field
                required
                autoComplete="off"
                type="number"
                name="houseNumber"
                min="0"
                max="1000"
                placeholder="number"
                onChange={this.handleChange}
                value={this.state.houseNumber}
              />
              <Field
                required
                autoComplete="off"
                type="text"
                name="city"
                placeholder="city"
                onChange={this.handleChange}
                value={this.state.city}
              />
              <Field
                required
                min="1"
                max="10000"
                autoComplete="off"
                type="number"
                name="postalCode"
                placeholder="postal code"
                onChange={this.handleChange}
                value={this.state.postalCode}
              />
              <button
                type="submit"
                style={{ display: "block", margin: "40px auto 0" }}
                className="btn"
              >
                Submit
              </button>
            </Form>
          )}
        />
      );
    }
  }
}
