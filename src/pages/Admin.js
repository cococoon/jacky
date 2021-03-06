// OVERVIEW OF ALL CONTESTANTS AND THEIR DATA + ABILITY TO DELETE USER DATA
//MAYBE ADD FUNCTIONALITY TO RAFFLE FOR A WINNER :-)
import React, { Component } from "react";
import { BASEURL } from "../config/api";

import AdminTable from "../components/AdminTable/AdminTable";
import Loader from "../components/Loader/Loader";

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
    console.log("called");
    fetch(`${BASEURL}/guess`, {
      method: "delete",
      body: JSON.stringify({ id: id }),
      headers: {
        "Content-Type": "application/json",
        "x-access-token": sessionStorage.getItem("token")
      }
    });
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
      return <Loader />;
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
