import React, { useContext, useState } from "react";
import StateContext from "../context";
import { Redirect } from "react-router-dom";

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
      <div>
        <h1>Log In</h1>
        <label>
          Email
          <input type="email" />
        </label>
        <label>
          Password
          <input type="password" />
        </label>
        <button onClick={handleSubmit}>Log In</button>
      </div>
    </>
  );
};

export default LogInForm;
