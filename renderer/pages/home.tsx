import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function home() {
  return (
    <div className=" relative w-full h-screen flex items-center justify-center flex-col bg-white  ">
      <img
        src={"/images/paiement.jpg"}
        alt=""
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
        }}
        className=""
      />
      <div className=" absolute top-0 left-0 w-full h-full bg-[rgb(0,0,0,0.75)] flex flex-col items-center justify-center gap-4 ">
        <div className=" text-5xl font-extrabold flex items-center text-white uppercase gap-8 ">
          <p> bienvenue sur</p>{" "}
          <p className=" uppercase font-extrabold  text-green-400">
            Eni <span className=" uppercase text-blue-400">Paye</span>
          </p>
        </div>
        <p className=" w-[70%] text-xl text-white text-center">
          Gérez facilement les données des étudiants, les frais, et les
          paiements grâce à une interface intuitive. Suivi en temps réel des
          montants payés et impayés
        </p>
        <Link href={"/etudiant"}>
          <div className=" py-2 px-12 rounded-sm text-white hover:bg-green-400 bg-green-300 uppercase cursor-pointer">
            commencer
          </div>
        </Link>
      </div>
    </div>
  );
}
