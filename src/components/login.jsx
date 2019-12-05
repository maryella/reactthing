import React, { useContext, useState } from "react";
import StateContext from "../context";
import { Redirect, Link, withRouter } from "react-router-dom";

const LogInForm = () => {
  const [redirect, setRedirect] = useState(false);
  const [value, dispatch] = useContext(StateContext);
  const changeValue = async () => {
    dispatch({
      type: "log in"
    });
  };

  const handleSubmit = e => {
    changeValue();
    setRedirect(true);
  };

  return (
    <>
      {redirect && <Redirect to="/loggedin/dashboard" />}
      <section
        role="main"
        className="container position-relative p-4 w-85 bg-light"
      >
        <div className="w-50 position-relative m-auto text-center">
          <h1 className="h2 mb-3 font-weight-normal">Log In</h1>
          <label className="sr-only">Email address</label>
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email address"
          ></input>
          <label className="sr-only">Password</label>
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            required
          ></input>
          <div className="p-3">
            <button
              onClick={handleSubmit}
              type="button"
              className="btn btn-outline-danger"
            >
              Log In
            </button>
          </div>
          <div classname="p-2">
            No account yet?
            <br></br>
            <Link to="/signup" className="text-danger">
              Sign Up!
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default LogInForm;
