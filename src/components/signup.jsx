import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const SignUpForm = () => {
  const [user_name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const addUser = async data => {
    const response = await fetch("http://localhost:3000/users/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    const reply = await response;
    if (reply.status === 200) {
      alert("New User Added");
    }
    if (reply.status !== 200) {
      alert("womp womp");
    }
  };

  let updateName = nameInput => {
    setName(nameInput);
  };
  let updateEmail = emailInput => {
    setEmail(emailInput);
  };
  let updatePassword = passwordInput => {
    setPassword(passwordInput);
  };

  const handleSubmit = e => {
    setRedirect(true);
    const data = { user_name, email, password };
    addUser(data);
    console.log("data", data);
  };

  return (
    <>
      {redirect && <Redirect to="/login" />}
      <section
        role="main"
        className="container position-relative p-4 w-85 bg-light"
      >
        <div className="w-75 m-auto">
          <header className="mb-3 h2">Sign Up</header>
          <div className="form-group row">
            <label className="col-form col-sm-2 h4">Name:</label>
            <div className="col">
              <input
                type="text"
                className="form-control"
                onChange={e => updateName(e.target.value)}
                value={user_name}
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-form col-sm-2 h4">Email:</label>
            <div className="col">
              <input
                type="email"
                className="form-control"
                onChange={e => updateEmail(e.target.value)}
                value={email}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-form col-sm-2 h4">Password:</label>
            <div className="col">
              <input
                type="password"
                className="form-control"
                onChange={e => updatePassword(e.target.value)}
                value={password}
              />
            </div>
          </div>
          <div className="text-center">
            <button
              type="button"
              className="btn btn-outline-danger"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUpForm;
