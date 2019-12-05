import React, { useContext } from "react";
import StateContext from "../context";
import { Link, withRouter } from "react-router-dom";

const Dashboard = () => {
  const context = useContext(StateContext);

  return (
    <div className="container bg-light p-4">
      <div>
        <h1>My Medication List</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Class Name</th>
              <th>Drug Name</th>
              <th>Dose</th>
              <th>Directions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ACE Inhibitor</td>
              <td>Lisinopril</td>
              <td>10 mg</td>
              <td>1 per day</td>
            </tr>
          </tbody>
        </table>
        <div className="text-center">
          <Link to="/walkthrough">
            <button type="button" className="btn btn-outline-danger">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
