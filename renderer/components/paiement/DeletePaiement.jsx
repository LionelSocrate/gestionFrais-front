import React from "react";
import { FaCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { TiWarning } from "react-icons/ti";

export default function DeletePaiement({
  handleAfficheDelete,
  id,
  numMatr,
  frais,
  date,
}) {
  const handleDelete = async (id) => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/paiement/deletePaiement/${id}`,
        {
          method: "DELETE",
        }
      ).then((res) => res.json());
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };
  return (
    <>
      <div className=" fixed top-0 left-0 w-screen h-screen z-50 bg-[rgb(0,0,0,0.5)] flex items-center justify-center ">
        <div className=" relative  bg-white rounded-md py-6 px-8 flex flex-col items-center gap-6 ">
          <IoClose
            onClick={handleAfficheDelete}
            className=" absolute top-2 right-2 text-red-400 cursor-pointer hover:text-red-500 "
            size={"1.5rem"}
          />
          <p className=" uppercase tracking-wide text-2xl  font-extrabold ">
            <span className="  font-extrabold text-2xl text-red-500 tracking-wide">
              supprimer&nbsp;
            </span>{" "}
            un paiement ?
          </p>
          <div className=" relative w-full flex flex-col gap-4 py-6 px-12 bg-red-100">
            <div className=" absolute top-0 left-0 h-full w-1 bg-red-500"></div>
            <TiWarning
              size={"1.5rem"}
              className=" absolute top-3 right-3 text-red-500"
            />
            <p className="  text-[rgb(0,0,0,0.75)] text-sm ">
              vous voulez vraiment supprimer le frais qui a les informations{" "}
              <br />
              suivantes{" "}
            </p>
            <div className=" flex flex-col">
              <div className=" flex items-center gap-4">
                <FaCheck size={"1.1rem"} className=" text-red-500" />

                <p>Paiement d'étudiant N° : {numMatr} </p>
              </div>
              <div className=" flex items-center gap-4">
                <FaCheck size={"1.1rem"} className=" text-red-500" />

                <p>Frais : {frais} </p>
              </div>

              <div className=" flex items-center gap-4">
                <FaCheck size={"1.1rem"} className=" text-red-500" />

                <p>Date : {formatDate(date)} </p>
              </div>
            </div>
          </div>
          <div className=" w-full flex items-center gap-8">
            <button
              className=" w-1/2 cursor-pointer py-[0.5rem] text-sm    text-red-400 border border-red-500 rounded-md"
              onClick={handleAfficheDelete}
            >
              Annuler
            </button>
            <button
              className=" w-1/2 cursor-pointer py-[0.5rem] text-sm   text-white font-bold  bg-red-500 hover:bg-red-400 rounded-md"
              onClick={() => handleDelete(id)}
            >
              Supprimer
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
