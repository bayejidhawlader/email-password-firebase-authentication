import React from "react";
import { Link, Outlet } from "react-router-dom";
import App from "../../App";

const Main = () => {
  return (
    <div>
      <h1>Simple Form</h1>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
