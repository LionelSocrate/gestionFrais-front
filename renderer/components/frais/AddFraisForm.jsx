import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

export default function AddFraisForm({ afficheAddFrais }) {
  const [nom, setNom] = useState("");
  const [montant, setMontant] = useState("");
  const [niveau, setNiveau] = useState("");
  const [dateEcheance, setDateEcheance] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const newFrais = async () => {
        await fetch("http://localhost:5000/api/frais/addFrais", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            nomFrais: nom,
            montant: montant,
            niveau: niveau,
            dateEcheance: dateEcheance,
          }),
        }).then((res) => res.json());
      };
      newFrais();
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className=" fixed top-0 left-0 w-full  z-50 h-screen flex items-center justify-center bg-[rgb(0,0,0,0.15)] ">
        <form
          action=""
          className=" relative bg-white rounded-md px-8 py-6 flex flex-col items-center gap-4  "
          onSubmit={handleSubmit}
        >
          <div
            className=" cursor-pointer absolute top-2 right-2 flex items-center justify-center  w-7 h-7 rounded-full bg-green-400"
            onClick={afficheAddFrais}
          >
            <IoClose size={"1.2rem"} className=" text-white" />
          </div>
          <p className=" text-xl uppercase text-green-400  font-extrabold">
            Ajout d'un Frais
          </p>
          <div className=" w-full h-[0.5px] bg-green-400 "></div>
          <div className=" flex flex-col gap-3">
            <div className=" w-full flex flex-col gap-1">
              <label htmlFor="nom">Nom du frais</label>
              <input
                type="text"
                className=" outline-none border border-green-400 w-[23rem] px-4 py-1 "
                onChange={(e) => setNom(e.target.value)}
              />
            </div>
            <div className=" w-full flex flex-col gap-1">
              <label htmlFor="nom">Montant (Ar)</label>
              <input
                type="text"
                className=" outline-none border border-green-400 w-full px-4 py-1 "
                onChange={(e) => setMontant(e.target.value)}
              />
            </div>
            <div className=" w-full flex flex-col gap-1">
              <label htmlFor="nom">Niveau concerné</label>
              <select
                name="niveau"
                id=""
                className=" w-full outline-none border border-green-400  px-4 py-[0.4rem] "
                onChange={(e) => {
                  setNiveau(e.target.value);
                }}
              >
                <option value="L1">L1</option>
                <option value="L2">L2</option>
                <option value="L3">L3</option>
                <option value="M1">M1</option>
                <option value="M2">M2</option>
              </select>
            </div>

            <div className=" w-full flex flex-col gap-1">
              <label htmlFor="nom">Date d'écheance</label>
              <input
                type="text"
                className=" outline-none border border-green-400 w-full px-4 py-1 "
                onChange={(e) => setDateEcheance(e.target.value)}
              />
            </div>
          </div>
          <button
            type="submit"
            className=" uppercase text-white bg-green-300 rounded-sm w-full py-2"
          >
            ajouter
          </button>
        </form>
      </div>
    </>
  );
}
