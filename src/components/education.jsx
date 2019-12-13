import React from "react";
import { useParams } from "react-router-dom";

const Druglist = require("../util/drugs.json");

const Education = () => {
  const { category } = useParams();
  const drugcategory = Druglist[category];

  const classname = drugcategory.categoryname;
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
