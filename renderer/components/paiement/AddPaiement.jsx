import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

export default function AddPaiement({ afficheAddPaiment }) {
  const [numMatr, setNumMatr] = useState("");
  const [frais, setFrais] = useState("");

  const [listeFrais, setListeFrais] = useState([]);
  const getFrais = async () => {
    try {
      const res = await fetch(
        "http://localhost:5000/api/frais/getAllFrais"
      ).then((res) => res.json());
      setListeFrais(res.frais);
      setFrais(res.frais[0].nomFrais);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    (async () => await getFrais())();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const newPaiement = async () => {
        await fetch("http://localhost:5000/api/paiement/addPaiement", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            numMatr: numMatr,
            frais: frais,
          }),
        }).then((res) => res.json());
      };
      newPaiement();
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
          className=" relative bg-white rounded-md px-8 py-6 flex flex-col items-center gap-8  "
          onSubmit={handleSubmit}
        >
          <div
            className=" cursor-pointer absolute top-2 right-2 flex items-center justify-center  w-7 h-7 rounded-full bg-green-400"
            onClick={afficheAddPaiment}
          >
            <IoClose size={"1.2rem"} className=" text-white" />
          </div>
          <p className=" text-xl uppercase text-green-400  font-extrabold">
            Payer un Frais
          </p>
          <div className=" w-full h-[0.5px] bg-green-400 "></div>
          <div className=" flex flex-col gap-6">
            <div className=" w-full flex flex-col gap-3">
              <label htmlFor="nom">N° Matricule</label>
              <input
                type="text"
                className=" outline-none border border-green-400 w-[23rem] px-4 py-1 "
                onChange={(e) => setNumMatr(e.target.value)}
              />
            </div>
            <div className=" w-full flex flex-col gap-3">
              <label htmlFor="nom">Frais</label>
              <select
                name="frais"
                id=""
                className=" w-full outline-none border border-green-400  px-4 py-[0.4rem] "
                onChange={(e) => {
                  setFrais(e.target.value);
                }}
              >
                {listeFrais.map((item) => (
                  <option value={item.nomFrais} key={item._id}>
                    {item.nomFrais}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button
            type="submit"
            className=" uppercase text-white bg-green-300 rounded-sm w-full py-2"
          >
            payer
          </button>
        </form>
      </div>
    </>
  );
}
