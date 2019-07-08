import React from "react";
import "./Button.scss";

export default function Button(props) {
  return (
    <div>
      <button onClick={props.onClick} className="btn">
        {props.content}
      </button>
    </div>
  );
}
