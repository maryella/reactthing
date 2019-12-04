import React, { useReducer } from "react";
import { StateProvider } from "./context";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Page from "./components/homepage";
import Dashboard from "./components/dashboard";
import LogIn from "./components/login";

function App() {
  const initialState = {
    logged_in: false
  };

  const logInReducer = (state, action) => {
    switch (action.type) {
      case "log in":
        return {
          logged_in: true
        };
      default:
        return state;
    }
  };

  return (
    <div className="App">
      <StateProvider value={useReducer(logInReducer, initialState)}>
        <Page />
      </StateProvider>
    </div>
  );
}

export default App;
