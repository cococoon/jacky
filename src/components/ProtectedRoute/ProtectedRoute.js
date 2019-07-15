import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function ProtectedRoute({
  auth,
  component: Component,
  ...rest
}) {
  console.log({ ...rest });
  return (
    <Route
      {...rest}
      render={props => {
        if (auth === true) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
}
