import React, { useContext, useState } from "react";
import StateContext from "../context";
import Dashboard from "./dashboard";
import LogIn from "./login";

const Page = () => {
  const context = useContext(StateContext);
  let { logged_in } = context[0];
  return (
    <div>
      {logged_in && <Dashboard />}
      {!logged_in && <LogIn />}
    </div>
  );
};

export default Page;
