import Link from "next/link";
import React, { useState } from "react";
import Topbar from "../components/home/Topbar";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
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
            <p className=" text-2xl text-red-400 uppercase">connexion</p>
            <div className=" h-[1px] w-full bg-red-300 "></div>
            <div className=" flex flex-col gap-1">
              <p>Email</p>
              <input
                type="email"
                className=" outline-none border border-red-400 w-[20rem] px-4 py-1 "
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className=" flex flex-col gap-1">
              <p>Password</p>
              <input
                type="password"
                className=" outline-none border border-red-400 w-[20rem] px-4 py-1 "
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            <button
              onClick={handleSubmit}
              type="submit"
              className=" text-white bg-red-400 w-full py-1 mt-4 rounded-sm"
            >
              Se connecter
            </button>
          </form>
          <Link href={"/signup"} className=" text-red-400 self-end">
            Pas de compte
          </Link>
        </div>
      </div>
    </>
  );
}
