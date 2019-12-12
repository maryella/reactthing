import React, { useContext, useState, useEffect } from "react";
import StateContext from "../context";

const Education = () => {
  //   const context = useContext(StateContext);
  //   const [data, setData] = useState([]);
  //   const getInfo = async () => {
  //     const response = await fetch("http://localhost:3000/meds", {
  //       method: "GET",
  //       credentials: "include"
  //     });
  //     const data = response.json();
  //     return data;
  //   };
  //   useEffect(() => {
  //     getInfo().then(response => setData(response));
  //   }, []);
  const classname = "Beta Blockers";
  const info = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
  aliquip ex ea commodo consequat. Duis aute irure dolor in
  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
  culpa qui officia deserunt mollit anim id est laborum`;

  return (
    <>
      <div className="container bg-light p-4">
        <div>
          <h1>{classname}</h1>
        </div>
        <p>{info}</p>
      </div>
    </>
  );
};

export default Education;
