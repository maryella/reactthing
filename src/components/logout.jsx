import React, { useContext } from "react";
import StateContext from "../context";

const LogOut = () => {
  const [value, dispatch] = useContext(StateContext);

  const logOut = async data => {
    const response = await fetch("http://localhost:3000/users/logout", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    const reply = await response;
    if (reply.status === 200) {
      dispatch({
        type: "log out"
      });
      window.location.href = "/";
    }
    if (reply.status !== 200) {
      console.log("logout error");
    }
  };

  //   const changeValue = async () => {
  //     dispatch({
  //       type: "log out"
  //     });
  //   };

  const handleSubmit = e => {
    logOut();
    window.location.href = "/";
  };

  return (
    <>
      <div>
        <button onClick={handleSubmit} type="button" className="btn btn-light">
          Log Out
        </button>
      </div>
    </>
  );
};

export default LogOut;
