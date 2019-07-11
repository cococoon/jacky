// OVERVIEW OF ALL CONTESTANTS AND THEIR DATA + ABILITY TO DELETE USER DATA
//MAYBE ADD FUNCTIONALITY TO RAFFLE FOR A WINNER :-)
import React, { Component } from "react";
import { BASEURL } from "../config/api";

import AdminTable from "../components/AdminTable/AdminTable";

export default class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guesses: [
        {
          name: "Koen",
          firstName: "Koen",
          lastName: "Koen",
          email: "koen@koen.com",
          length: "50.00",
          weight: "3.50",
          street: "nowhere street",
          houseNumber: "5",
          city: "nowhere",
          postalCode: "2000"
        },
        {
          name: "Koen",
          firstName: "Koen",
          lastName: "Koen",
          email: "koen@koen.com",
          length: "50.00",
          weight: "3.50",
          street: "nowhere street",
          houseNumber: "5",
          city: "nowhere",
          postalCode: "2000"
        },
        {
          name: "Koen",
          firstName: "Koen",
          lastName: "Koen",
          email: "koen@koen.com",
          length: "50.00",
          weight: "3.50",
          street: "nowhere street",
          houseNumber: "5",
          city: "nowhere",
          postalCode: "2000"
        }
      ]
    };
  }

  componentDidMount() {
    fetch(`${BASEURL}/admin`, {
      method: "post",
      body: {
        token: sessionStorage.getItem("token")
      },
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        return res.json();
      })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div style={{ zIndex: 20 }}>
        <h2 style={{ textAlign: "center" }}>All Guesses</h2>
        <AdminTable guesses={this.state.guesses} />
      </div>
    );
  }
}
