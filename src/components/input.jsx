import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";

const AddMedForm = () => {
  const [user_name, setName] = useState("");
  const [email, setEmail] = useState("");

  const addMed = async data => {
    const response = await fetch("http://localhost:8080/api/register", {
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

  const handleSubmit = e => {};

  return (
    <>
      <div className="container bg-light p-4">
        <div className="">
          <header className="mb-3 h3">ACE Inhibitor</header>
          <div className="form-group row">
            <label className="col-form col-sm-2 h4">Name:</label>
            <div className="col">
              <select className="form-control" aria-placeholder="" name="name">
                <option value="Enalapril">Enalapril</option>
              </select>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-form col-sm-2 h4">Strength:</label>
            <div className="col">
              <select
                className="form-control"
                aria-placeholder=""
                name="strength"
              >
                <option value="strength">1 mg</option>
              </select>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-form col-sm-2 h4">Directions:</label>

            <div className="input-group col">
              <select
                className="form-control"
                aria-placeholder=""
                name="number"
              >
                <option value="">one</option>
              </select>
              <select
                className="form-control"
                aria-placeholder=""
                name="frequency"
              >
                <option value="">once a day</option>
              </select>
              <select className="form-control" aria-placeholder="" name="time">
                <option value="">in the morning</option>
              </select>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-form col-sm-2 h4">Comments:</label>

            <div className="col">
              <textarea className="form-control"></textarea>
            </div>
          </div>
          <div className="text-center">
            <Link to="/loggedin/dashboard">
              <button type="button" className="btn btn-outline-danger">
                Add to My List
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddMedForm;
