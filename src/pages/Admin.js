// OVERVIEW OF ALL CONTESTANTS AND THEIR DATA + ABILITY TO DELETE USER DATA
//MAYBE ADD FUNCTIONALITY TO RAFFLE FOR A WINNER :-)
import React, { Component } from "react";
import { BASEURL } from "../config/api";

import AdminTable from "../components/AdminTable/AdminTable";

export default class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch(`${BASEURL}/admin`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": sessionStorage.getItem("token")
      }
    })
      .then(res => {
        return res.json();
      })
      .then(res => {
        this.setState({
          guesses: res.docs,
          isLoaded: true
        });
      })
      .catch(err => console.log(err));
  }

  handleDelete = id => {
    let guesses = this.state.guesses.filter(guess => {
      if (id !== guess._id) {
        return guess;
      } else {
        return false;
      }
    });
    this.setState({
      guesses: guesses
    });
  };

  render() {
    if (!this.state.isLoaded) {
      return <p>Loading...</p>;
    } else {
      return (
        <div style={{ zIndex: 20 }}>
          <h2 style={{ textAlign: "center" }}>All Guesses</h2>
          <AdminTable
            handleDelete={this.handleDelete}
            guesses={this.state.guesses}
          />
        </div>
      );
    }
  }
}
