import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

export default function UpdateFrais({
  id,
  nom,
  montant,
  niveau,
  dateEcheance,
  handleAfficheUpdate,
}) {
  const [nomUpdate, setNomUpdate] = useState("");
  const [montantUpdate, setMontantUpdate] = useState("");
  const [niveauUpdate, setNiveauUpdate] = useState("L1");
  const [dateEcheanceUpdate, setDateEcheanceUpdate] = useState("");

  useEffect(() => {
    setNomUpdate(nom);
    setMontantUpdate(montant);
    setDateEcheanceUpdate(dateEcheance);
  }, []);
  const fraisUpdated = async () => {
    await fetch(`http://localhost:5000/api/frais/updateFrais/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nomFrais: nomUpdate,
        montant: montantUpdate,
        niveau: niveauUpdate,
        dateEcheance: dateEcheanceUpdate,
      }),
    }).then((res) => res.json());
  };
  return (
    <>
      <div className=" fixed top-0 left-0 w-full  z-50 h-screen flex items-center justify-center bg-[rgb(0,0,0,0.15)] ">
        <form
          action=""
          className=" relative bg-white rounded-md px-8 py-6 flex flex-col items-center gap-4  "
          onSubmit={fraisUpdated}
        >
          <div
            className=" cursor-pointer absolute top-2 right-2 flex items-center justify-center  w-7 h-7 rounded-full bg-green-400"
            onClick={handleAfficheUpdate}
          >
            <IoClose size={"1.2rem"} className=" text-white" />
          </div>
          <p className=" text-xl uppercase text-green-400  font-extrabold">
            Modification du Frais
          </p>
          <div className=" w-full h-[0.5px] bg-green-400 "></div>
          <div className=" flex flex-col gap-3">
            <div className=" flex flex-col gap-1">
              <label htmlFor="nom">Nom du frais</label>
              <input
                type="text"
                value={nomUpdate}
                className=" outline-none border border-green-400 w-[22rem] px-4 py-1 "
                onChange={(e) => setNomUpdate(e.target.value)}
              />
            </div>
            <div className=" w-full flex flex-col gap-1">
              <label htmlFor="nom">Montant (Ar)</label>
              <input
                type="text"
                value={montantUpdate}
                className=" outline-none border border-green-400 w-full px-4 py-1 "
                onChange={(e) => setMontantUpdate(e.target.value)}
              />
            </div>
            <div className=" w-full flex flex-col gap-1">
              <label htmlFor="nom">Niveau concerné</label>
              <select
                name="niveau"
                id=""
                className=" w-full outline-none border border-green-400  px-4 py-[0.4rem] "
                onChange={(e) => {
                  setNiveauUpdate(e.target.value);
                }}
              >
                <option value="L1">L1</option>
                <option value="L2">L2</option>
                <option value="L3">L3</option>
                <option value="M1">M1</option>
                <option value="M2">M2</option>
              </select>
            </div>

            <div className=" flex flex-col gap-1">
              <label htmlFor="nom">Date d'écheance</label>
              <input
                type="text"
                value={dateEcheanceUpdate}
                className=" outline-none border border-green-400 w-[22rem] px-4 py-1 "
                onChange={(e) => setDateEcheanceUpdate(e.target.value)}
              />
            </div>
          </div>
          <button
            type="submit"
            className=" uppercase text-white bg-green-300 rounded-sm w-full py-2"
          >
            Modifier
          </button>
        </form>
      </div>
    </>
  );
}
