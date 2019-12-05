import React, { useContext } from "react";
import StateContext from "../context";
import { Link, withRouter } from "react-router-dom";

const Landing = () => {
  const context = useContext(StateContext);
  const greeting = "welcome to my web app";

  return (
    <section role="main">
      <div className="container position-relative p-4 w-85 bg-light">
        <h1 className="text-center">{greeting}</h1>
      </div>
    </section>
  );
};

export default Landing;
