import React, { useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import StateContext from "../context";
import LogOut from "./logout";

const NavBar = props => {
  const context = useContext(StateContext);

  let { logged_in } = context[0];
  return (
    <>
      <div className="mb-2">
        <nav className="navbar sticky-top navbar-light navbar-expand-lg navbar-dark">
          <Link className="navbar-brand homelogo logo" to="/">
            i-Survived
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
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ">
              <Link className="nav-item nav-link" to="/about">
                About
              </Link>
              <Link className="nav-item nav-link" to="/faq">
                FAQ
              </Link>
              <Link className="nav-item nav-link" to="/contact us">
                Contact
              </Link>
              {logged_in && (
                <Link
                  className="nav-item nav-link dashboard"
                  to="/loggedin/dashboard"
                >
                  Dashboard
                </Link>
              )}
            </div>
          </div>
          <div className="form-inline">
            {logged_in ? (
              <>
                <LogOut className="nav-item nav-link" />
              </>
            ) : (
              <>
                <Link className="nav-item nav-link" to="/login">
                  <button type="button" className="btn btn-light">
                    Log In
                  </button>
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </>
  );
};

export default withRouter(NavBar);
