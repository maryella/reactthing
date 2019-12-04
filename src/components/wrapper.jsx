import React, { useReducer } from "react";
import { StateProvider } from "../context/index.js";

const Wrapper = props => {
  const initialState = {
    logged_in: false
  };
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

  return (
    <>
      <StateProvider value={useReducer(LogInReducer, initialState)}>
        {props.children}
      </StateProvider>
    </>
  );
};

export default Wrapper;
