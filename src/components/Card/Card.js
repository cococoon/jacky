import React from "react";
import "./Card.scss";
import Former from "../Form/Former";
import Graphic from "../Graphic/Graphic";

export default function Card() {
  return (
    <div className="card-container">
      <div className="card">
        <Graphic />
        <Former />
      </div>
    </div>
  );
}
