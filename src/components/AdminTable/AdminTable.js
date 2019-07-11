import React from "react";

import "./AdminTable.scss";

export default function AdminTable(props) {
  return (
    <div className="table-container">
      {props.guesses.map((guess, index) => {
        console.log(guess.firstName);
        return (
          <div
            //   key={guess._id}
            key={index}
            className="table-row"
          >
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
              <button className="btn-delete" onClick={props.handleDelete}>
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
