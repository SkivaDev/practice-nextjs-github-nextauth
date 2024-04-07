"use client";

import { signOut } from "next-auth/react";
import React from "react";

const ButtonSingout = () => {
  return (
    <button
      onClick={() => signOut()}
      className="bg-red-600 hover:bg-red-900 text-white font-bold py-2 px-4 rounded-full"
    >
      Cerrar Sesión
    </button>
  );
};

export default ButtonSingout;
