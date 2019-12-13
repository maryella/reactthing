import React, { useReducer, useEffect, useContext } from "react";

import { StateProvider } from "../context";

const Wrapper = props => {
  const initialState = {
    logged_in: false
  };
  const localState = localStorage.getItem("loggedI");
  const LogInReducer = (state, action) => {
    switch (action.type) {
      case "log in":
        return {
          logged_in: true
        };
      case "log out":
        return {
          logged_in: false
        };
      default:
        return state;
    }
  };

  let loggedIn = localStorage.getItem("loggedIn");

  useEffect(() => {
    localStorage.setItem("loggedIn", JSON.stringify(loggedIn));
  }, [loggedIn]);

  return (
    <>
      <StateProvider
        value={useReducer(LogInReducer, localState || initialState)}
      >
        {props.children}
      </StateProvider>
    </>
  );
};

export default Wrapper;
