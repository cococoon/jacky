import React, { Component } from "react";
import Button from "../Button/Button";

import "./Form.scss";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // name: "",
      // length: "",
      // weight: "",
      // userName: "",
      // street: "",
      // streetNumber: "",
      // postalCode: "",
      // munincipality: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = e => {
    let value = e.target.value;
    this.setState({
      [e.target.name]: value
    });
  };

  handleSubmit = e => {
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <input
          required
          type="text"
          name="name"
          className="name"
          placeholder="Jacky?"
          autocomplete="off"
          onChange={this.handleChange}
          value={this.state.name}
        />
        <label for="length">
          {this.state.length ? this.state.length + " cm" : "length"}
        </label>
        <input
          required
          type="range"
          min="40.00"
          max="65.00"
          step="0.1"
          name="length"
          placeholder="length"
          onChange={this.handleChange}
          value={this.state.height}
        />
        <label for="weight">
          {this.state.weight ? this.state.weight + " kg" : "weight"}
        </label>
        <input
          required
          type="range"
          min="2.00"
          max="5.00"
          step="0.01"
          name="weight"
          placeholder="weight"
          onChange={this.handleChange}
          value={this.state.weight}
        />

        <input
          required
          type="text"
          name="userName"
          placeholder="your name"
          onChange={this.handleChange}
          value={this.state.userName}
        />

        <input
          required
          type="email"
          name="email"
          placeholder="email"
          onChange={this.handleChange}
          value={this.state.email}
        />

        <input
          required
          type="text"
          name="street"
          placeholder="street"
          onChange={this.handleChange}
          value={this.state.street}
        />

        <input
          required
          type="number"
          name="houseNumber"
          min="0"
          max="1000"
          placeholder="number"
          onChange={this.handleChange}
          value={this.state.houseNumber}
        />

        <input
          required
          type="number"
          name="postalCode"
          placeholder="postal code"
          onChange={this.handleChange}
          value={this.state.postalCode}
        />

        <input
          required
          type="text"
          name="city"
          placeholder="city"
          onChange={this.handleChange}
          value={this.state.city}
        />

        <Button onClick={this.handleSubmit} content="Submit" />
      </div>
    );
  }
}
