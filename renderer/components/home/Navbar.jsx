import Link from "next/link";
import React, { useState } from "react";
import { HiOutlineUserGroup } from "react-icons/hi";
import { IoIosLogOut } from "react-icons/io";
import { IoBagAddOutline } from "react-icons/io5";
import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import { RxDashboard } from "react-icons/rx";

export default function Navbar({}) {
  const [etudiant, setEtudiant] = useState(true);
  const [frais, setFrais] = useState(false);
  const [paiement, setPaiement] = useState(false);

  const handleEtudiant = () => {
    setFrais(false);
    setPaiement(false);
    setEtudiant(true);
  };
  const handleFrais = () => {
    setPaiement(false);
    setEtudiant(false);
    setFrais(true);
  };
  const handlePaiement = () => {
    setFrais(false);
    setEtudiant(false);
    setPaiement(true);
  };

  return (
    <>
      <div className="  h-[90vh] flex flex-col justify-between bg-[var(--white)]  py-12">
        <div className=" flex flex-col ">
          <Link className=" w-full" href={"/etudiant"}>
            <div
              className={` w-full flex items-center gap-4 px-8 pr-20 cursor-pointer  ${
                etudiant ? " bg-blue-300 text-white" : ""
              } hover:text-white  hover:bg-blue-200 py-5 transition-all duration-100`}
              onClick={handleEtudiant}
            >
              <i>
                <HiOutlineUserGroup size={"1.2rem"} />
              </i>
              <span className=" min-w-max">Etudiant </span>
            </div>
          </Link>
          <Link className=" w-full" href={"/Frais"}>
            <div
              className={` w-full flex items-center gap-4 px-8 cursor-pointer  ${
                frais ? " bg-blue-300 text-white" : ""
              } hover:text-white  hover:bg-blue-200 py-5 transition-all duration-100`}
              onClick={handleFrais}
            >
              <i>
                <IoBagAddOutline size={"1.2rem"} />
              </i>
              <span className=" min-w-max">Frais </span>
            </div>
          </Link>
          <Link className=" w-full" href={"/Paiement"}>
            <div
              className={` w-full flex items-center gap-4 px-8 cursor-pointer  ${
                paiement ? " bg-blue-300 text-white" : ""
              } hover:text-white  hover:bg-blue-200 py-5 transition-all duration-100`}
              onClick={handlePaiement}
            >
              <i>
                <LiaMoneyCheckAltSolid size={"1.2rem"} />
              </i>
              <span className=" min-w-max">Payement </span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
