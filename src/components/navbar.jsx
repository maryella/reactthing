import React from "react";
import { Link, withRouter } from "react-router-dom";
import StateContext from "../context";

const NavBar = props => {
  const context = useContext(StateContext);
  let { logged_in } = context[0];
  return (
    <>
      <ul>
        <li>
          <Link className="navbar-brand" to="/">
            Home
          </Link>
        </li>
        {logged_in
          ? `<li> 
            <Link to="/dashboard">Dashboard</Link>`
          : `
        <li>
          <Link to="/signup">Sign up</Link>
        </li>
        <li>
          <Link to="/login">Log In</Link>
        </li>`}
      </ul>
    </>
  );
};

export default withRouter(NavBar);
