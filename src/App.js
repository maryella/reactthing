import React, { useReducer } from "react";
import { StateProvider } from "./context";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/wrapper";
import Dashboard from "./components/dashboard";
import Landing from "./components/landing";
import LogInForm from "./components/login";
import LogOut from "./components/logout";
import NavBar from "./components/navbar";
import AddMedForm from "./components/input";

const App = () => {
  return (
    <>
      <Router>
        <Wrapper>
          <nav>
            <NavBar />
          </nav>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/home">
            <Landing />
          </Route>
          <Route path="/login">
            <LogInForm />
          </Route>
          <Route path="/logout" component={LogOut}></Route>
          <Route path="/loggedin/dashboard" component={Dashboard}></Route>
          <Route path="/walkthrough" component={AddMedForm}></Route>
        </Wrapper>
      </Router>
    </>
  );
};

export default App;
