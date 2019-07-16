//TO DO: FIX DELETE ROW OF TABLE

import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import "./AdminTable.scss";

export default function AdminTable(props) {
  if (props.guesses) {
    // let data = props.guesses;
    let handleDelete = props.handleDelete;
    const columns = [
      {
        Header: "First name",
        accessor: "firstName"
      },
      {
        Header: "Last name",
        accessor: "lastName"
      },
      {
        Header: "Email",
        accessor: "email"
      },
      {
        Header: "Street",
        accessor: "street"
      },
      {
        Header: "Number",
        accessor: "houseNumber"
      },
      {
        Header: "City",
        accessor: "city"
      },
      {
        Header: "Postal code",
        accessor: "postalCode"
      },
      {
        Header: "Guess name",
        accessor: "name"
      },
      {
        Header: "Length",
        accessor: "length"
      },
      {
        Header: "Weight",
        accessor: "weight"
      },
      {
        Header: "",
        accessor: "_id",
        Cell: props => (
          <button
            className="btn-delete"
            onClick={e => handleDelete(props.value)}
          >
            delete
          </button>
        )
      }
    ];
    return (
      <>
        <ReactTable
          style={{ fontSize: "10px" }}
          data={props.guesses}
          //needed to update the table when data prop changes
          resolveData={data => data.map(row => row)}
          columns={columns}
          defaultPageSize={10}
          className="-striped -highlight"
        />
        {/* <div className="table-container">
          {props.guesses.map(guess => {
            return (
              <div key={guess._id} className="table-row">
                <div className="table-cell">{guess.firstName}</div>
                <div className="table-cell">{guess.lastName}</div>
                <div className="table-cell">{guess.email}</div>
                <div className="table-cell">{guess.street}</div>
                <div className="table-cell">{guess.houseNumber}</div>
                <div className="table-cell">{guess.city}</div>
                <div className="table-cell">{guess.postalCode}</div>
                <div className="table-cell">{guess.name}</div>
                <div className="table-cell">{guess.length}</div>
                <div className="table-cell">{guess.weight}</div>
                <div className="table-cell">
                  <button
                    className="btn-delete"
                    onClick={e => props.handleDelete(guess._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div> */}
      </>
    );
  } else {
    return <p>no data</p>;
  }
}
