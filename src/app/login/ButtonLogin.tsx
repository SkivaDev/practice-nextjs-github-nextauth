"use client";
import { signIn } from "next-auth/react";
import React from "react";

const ButtonLogin = () => {
  return (
    <button
      onClick={async () => {
        const result = await signIn("github", {
          callbackUrl: "/dashboard",
          redirect: false,
        });
        console.log(result);
      }}
      className="bg-green-400 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full"
    >
      Iniciar Sesión
    </button>
  );
};

export default ButtonLogin;
