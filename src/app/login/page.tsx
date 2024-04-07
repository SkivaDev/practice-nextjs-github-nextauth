import React from "react";
import ButtonLogin from "./ButtonLogin";

const loginPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <h1>Login con GitHub</h1>

        <ButtonLogin />
      </div>
    </div>
  );
};

export default loginPage;
