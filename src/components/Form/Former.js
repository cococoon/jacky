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
      isLoading: false,
      date: new Date(2019, 9, 27)
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    document.getElementById("guessName").focus();
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
    this.setState({
      isLoading: true
    });
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
        this.props.handleGuessResponse(response.guess);
        return response;
      })
      .then(response => {
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
                Promise.resolve();
              })
              .catch(err => {
                actions.setSubmitting(false);
                actions.setErrors(err.json());
              });
          }}
          render={({ errors, status, touched, isSubmitting }) => (
            <Form onSubmit={this.handleSubmit} autoComplete="off">
              {/* <div className="name-title-container"> */}
              <h2 className="name-title-title">Guess my name</h2>
              {/* <div className="name-title-arrow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 76.62 92.34"
                  >
                    <g id="Layer_2" data-name="Layer 2">
                      <g id="Layer_1-2" data-name="Layer 1">
                        <path
                          class="cls-1"
                          d="M74.24,1.75C59.32-.1,43.41-1.9,29.21,4.3A49.11,49.11,0,0,0,4.46,29.21c-4.17,9.34-7.62,24.51.28,32.85,4.18,4.4,10.41,6.93,16,9a80.55,80.55,0,0,0,22.43,4.81c3.21.24,3.2-4.76,0-5C32.11,70.07,17,67.11,8.79,59,.85,51.19,6.6,34.73,11.43,26.6A43.11,43.11,0,0,1,35.54,7.27c12.54-3.81,25.94-2.11,38.7-.52,3.19.39,3.16-4.61,0-5Z"
                        />
                        <path
                          class="cls-1"
                          d="M40.8,60.84q12.54,7.17,25,14.41l-.51-3.93C54.19,81.83,34.73,74.23,25.7,88.64,24,91.38,28.31,93.89,30,91.17c4.32-6.89,13-7.77,20.35-8.88,6.82-1,13.35-2.57,18.51-7.43a2.53,2.53,0,0,0-.51-3.93q-12.49-7.23-25-14.4c-2.79-1.6-5.32,2.72-2.52,4.31Z"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
              </div> */}
              <Field
                required
                id="guessName"
                type="text"
                name="guessName"
                className="guessName"
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
                //weird, but works
                value={this.state.weightt}
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
