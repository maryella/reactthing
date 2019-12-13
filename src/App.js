import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/wrapper";
import Dashboard from "./components/dashboard";
import Landing from "./components/landing";
import LogInForm from "./components/login";
import LogOut from "./components/logout";
import NavBar from "./components/navbar";
import AddMedForm from "./components/input";
import SignUpForm from "./components/signup";
import Education from "./components/education";
import Footer from "./components/footer";
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
          <Route path="/signup">
            <SignUpForm />
          </Route>
          <Route path="/logout" component={LogOut}></Route>
          <Route path="/loggedin/dashboard" component={Dashboard}></Route>
          <Route path="/walkthrough/:category?">
            <Education />
            <AddMedForm />
          </Route>
          <Footer />
        </Wrapper>
      </Router>
    </>
  );
};

export default App;
