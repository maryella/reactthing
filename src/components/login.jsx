import React, { useContext } from "react";
import StateContext from "../context";

const LogIn = () => {
  const [value, dispatch] = useContext(StateContext);
  console.log("value", value);
  const changeValue = async () => {
    dispatch({
      type: "log in",
      logged_in: true
    });
  };

  const handleSubmit = () => {
    changeValue();
  };
  return (
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
  );
};

export default LogIn;
