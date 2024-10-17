import Link from "next/link";
import React from "react";
import Topbar from "../components/home/Topbar";

export default function signup() {
  const handleSubmit = (e) => {
    e.preventdefault();
  };
  return (
    <>
      <div className=" w-full h-screen flex items-center justify-center">
        <div className=" fixed top-0 left-0 w-full">
          <Topbar />
        </div>
        <div className=" flex flex-col gap-2">
          <form
            className=" flex flex-col items-center gap-4 border border-red-400 rounded-xl p-8"
            onSubmit={handleSubmit}
          >
            <p className=" text-2xl text-red-400 uppercase">inscription</p>
            <div className=" h-[1px] w-full bg-red-300 "></div>
            <div className=" flex flex-col gap-1">
              <p>Nom</p>
              <input
                type="text"
                className=" outline-none border border-red-400 w-[20rem] px-4 py-1 "
              />
            </div>
            <div className=" flex flex-col gap-1">
              <p>Email</p>
              <input
                type="email"
                className=" outline-none border border-red-400 w-[20rem] px-4 py-1 "
              />
            </div>
            <div className=" flex flex-col gap-1">
              <p>Mot de passe</p>
              <input
                type="password"
                className=" outline-none border border-red-400 w-[20rem] px-4 py-1 "
              />
            </div>
            <div className=" flex flex-col gap-1">
              <p>Confirmer mot de passe</p>
              <input
                type="password"
                className=" outline-none border border-red-400 w-[20rem] px-4 py-1 "
              />
            </div>

            <button
              onClick={handleSubmit}
              type="submit"
              className=" text-white bg-red-400 w-full py-1 mt-4 rounded-sm"
            >
              S'inscrire
            </button>
          </form>
          <Link href={"/login"} className=" text-red-400 self-end">
            se connecter
          </Link>
        </div>
      </div>
    </>
  );
}
