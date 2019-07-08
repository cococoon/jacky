import React, { Component } from "react";
import Button from "../Button/Button";

import "./Form.scss";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      length: "",
      weight: ""
    };
  }

  handleChange(e) {
    let value = e.target.value;
  }

  render() {
    return (
      <div>
        <input
          required
          type="text"
          name="name"
          placeholder="name"
          onChange={this.handleChange}
          value={this.state.name}
        />
        <input
          required
          type="range"
          name="length"
          placeholder="length"
          onChange={this.handleChange}
          value={this.state.height}
        />
        <input
          required
          type="range"
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
          placeholder="house number"
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
          name="userName"
          placeholder="your name"
          onChange={this.handleChange}
          value={this.state.userName}
        />

        <Button content="Submit" />
      </div>
    );
  }
}
