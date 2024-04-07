import { getServerSession } from "next-auth";
import Image from "next/image";
import React from "react";
import ButtonSingout from "./ButtonSingout";

const DashboardPage = async () => {
  const session = await getServerSession();

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-slate-300 p-10 text-center">
        <h1>Bienvenido {session?.user?.name}</h1>

        <p>{session?.user?.email}</p>
        <Image
          src={session?.user?.image || ""}
          alt="Profile image"
          width={200}
          height={200}
        />

        <ButtonSingout />
      </div>
    </div>
  );
};

export default DashboardPage;
