import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/wrapper";
import Dashboard from "./components/dashboard";
import Landing from "./components/landing";
import LaunchPage from "./components/launch.jsx";
import LogInForm from "./components/login";
import LogOut from "./components/logout";
import NavBar from "./components/navbar";
import AddMedForm from "./components/input";
import UpdateMedForm from "./components/update";
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
          <Route path="/walkthroughintro" strict component={LaunchPage}></Route>
          <Route
            path="/walkthrough/:category?"
            strict
            render={({ match }) => {
              return (
                <>
                  <Education category={match.params.category} />
                  <AddMedForm
                    category={match.params.category}
                    key={match.params.category}
                  />
                </>
              );
            }}
          ></Route>
          <Route
            path="/update/:category?"
            render={({ match }) => {
              return (
                <UpdateMedForm
                  category={match.params.category}
                  key={match.params.category}
                />
              );
            }}
          ></Route>
          <Footer />
        </Wrapper>
      </Router>
    </>
  );
};

export default App;
