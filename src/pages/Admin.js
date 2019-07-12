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
      method: "post",
      // body: {
      //   token: sessionStorage.getItem("token")
      // },
      headers: {
        "Content-Type": "application/json"
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

  handleDelete = e => {};

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
