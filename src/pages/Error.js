import React from "react";
import { Link } from "react-router-dom";
export default function Error() {
  return (
    <div style={{ zIndex: 20 }}>
      <h1>Woops, something went wrong...</h1>
      <Link to="/">Take me back</Link>
    </div>
  );
}
