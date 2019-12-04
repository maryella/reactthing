import React, { useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import StateContext from "../context";
import LogOut from "./logout";

const NavBar = props => {
  const context = useContext(StateContext);
  console.log(context[0]);
  let { logged_in } = context[0];
  return (
    <>
      <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav ">
            {logged_in ? (
              <>
                <Link class="nav-item nav-link" to="/dashboard">
                  Dashboard
                </Link>
                <LogOut class="nav-item nav-link" />
              </>
            ) : (
              <>
                <Link className="nav-item nav-link" to="/signup">
                  Sign Up
                </Link>
                <Link className="nav-item nav-link" to="/login">
                  <button>Log In</button>
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default withRouter(NavBar);
