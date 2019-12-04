import React, { useContext, useState } from "react";
import StateContext from "../context";
import { Redirect } from "react-router-dom";

const LogOut = () => {
  const [value, dispatch] = useContext(StateContext);
  const changeValue = async () => {
    dispatch({
      type: "log out"
    });
  };

  const handleSubmit = e => {
    changeValue();
    window.location.href = "/";
  };

  return (
    <>
      <div>
        <button onClick={handleSubmit}>Log Out</button>
      </div>
    </>
  );
};

export default LogOut;
