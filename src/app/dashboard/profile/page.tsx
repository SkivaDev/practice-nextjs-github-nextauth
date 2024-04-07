"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

const ProfilePage = () => {
  const { data: session, status, update } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="bg-slate-300 p-10 text-center">
        <h1>Bienvenido {session?.user?.name}</h1>
        <p>{session?.user?.email}</p>
        <Image
          src={session?.user?.image || ""}
          alt="Profile Picture"
          width={200}
          height={200}
        />

        <button
          onClick={() => signOut()}
          className="bg-red-400 hover:bg-red-900 text-white font-bold py-2 px-4 rounded-full"
        >
            Cerrar Sesión
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
