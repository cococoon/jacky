import React from "react";
import "./Button.scss";

export default function Button(props) {
  return (
    <div>
      <button onSubmit={props.onSubmit} className="btn">
        {props.content}
      </button>
    </div>
  );
}
