import React, { useEffect, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import ListeStudent from "../etudiant/ListeStudent";

export default function Detail({
  id,
  nom,
  handleGlobal,
  niveau,
  dateEcheance,
  montant,
}) {
  const [paye, setPaye] = useState(true);
  const [nonPaye, setNonPaye] = useState(false);

  const handlePaye = () => {
    setNonPaye(false);
    setPaye(true);
  };
  const handleNonPaye = () => {
    setPaye(false);
    setNonPaye(true);
  };

  const [data, setData] = useState([]);
  const [paiements, setPaiements] = useState([]);
  const [numPaiement, setNumPaiement] = useState([]);

  const getStudents = async () => {
    try {
      const res = await fetch(
        "http://localhost:5000/api/student/getAllStudents"
      ).then((res) => res.json());
      setData(res.students);
    } catch (error) {
      console.log(error);
    }
  };
  const getPaiements = async () => {
    try {
      const res = await fetch(
        "http://localhost:5000/api/paiement/getAllPaiements"
      ).then((res) => res.json());
      setPaiements(res.paiements);

      const nums = res.paiements.map((ob) => ob.numMatr);
      const paiement = res.paiements.map((ob) => ob.montant);
      setNumPaiement(nums);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    (async () => await getStudents())();
    (async () => await getPaiements())();
  }, []);
  let nombreDePaiment = 0;
  let nombreTotalEtudiant = 0;
  let nombreDeNonPaiment = 0;
  return (
    <>
      <div
        className={` fixed top-0 left-0 z-50 px-12 py-8 w-full h-full ${
          paye ? "bg-blue-50" : "bg-red-50"
        } flex flex-col gap-4`}
      >
        <div className=" w-full  flex items-center justify-between">
          <div className=" flex items-center gap-8">
            <IoMdArrowBack
              size={"2rem"}
              className=" text-green-400 cursor-pointer"
              onClick={handleGlobal}
            />
            <p className=" text-2xl text-green-400">{nom}</p>
            <p className=" ">
              Date d'écheance :{" "}
              <span className=" text-green-400">{dateEcheance}</span>
            </p>
            <p className=" ">
              Montant : <span className=" text-green-400">{montant} Ar</span>
            </p>
          </div>
          <div className=" flex items-center gap-2">
            <p
              className=" capitalize py-1 bg-blue-200  hover:bg-blue-300 px-12 rounded-sm cursor-pointer"
              onClick={() => handlePaye()}
            >
              payements effectués
            </p>
            <p
              className=" py-1 bg-red-200 hover:bg-red-300 px-12 rounded-sm cursor-pointer "
              onClick={() => handleNonPaye()}
            >
              Non payés
            </p>
          </div>
        </div>
        <div className=" w-full flex flex-col gap-2">
          {paye && (
            <>
              {data.map((item) => {
                if (niveau === item.niveau) {
                  nombreTotalEtudiant++;
                  if (numPaiement.includes(item.numMatr)) {
                    nombreDePaiment++;
                    return (
                      <div className=" w-full   grid grid-cols-4  items-center gap-2">
                        <p className=" py-1 bg-white rounded-sm  text-center ">
                          {item.numMatr}{" "}
                        </p>
                        <p className=" py-1 bg-white rounded-sm  text-center capitalize ">
                          {item.prenoms}
                        </p>
                        <p className=" py-1 bg-white rounded-sm  text-center ">
                          {item.niveau}
                        </p>
                        <p className=" py-1 bg-white rounded-sm  text-center ">
                          {item.email}
                        </p>
                      </div>
                    );
                  }
                  return null;
                }
              })}

              <div className=" w-full flex items-center justify-center gap-12 mt-6">
                <p className=" text-2xl">
                  <span className=" text-green-400"> {nombreDePaiment}</span>/
                  {nombreTotalEtudiant} <span className=" text-sm">éleves</span>
                </p>
                <p className=" text-2xl">
                  Montant :{" "}
                  <span className=" text-xl">
                    <span className=" text-green-400">
                      {" "}
                      {nombreDePaiment * montant}
                    </span>
                  </span>{" "}
                  / {nombreTotalEtudiant * montant}Ar
                </p>
                <p className=" text-2xl  text-green-400">
                  {(nombreDePaiment * 100) / nombreTotalEtudiant}
                  <span className=" text-base"> %</span>
                </p>
              </div>
            </>
          )}
          {nonPaye && (
            <>
              {data.map((item) => {
                if (niveau === item.niveau) {
                  nombreTotalEtudiant++;
                  if (!numPaiement.includes(item.numMatr)) {
                    nombreDeNonPaiment++;
                    return (
                      <div className=" w-full   grid grid-cols-4  items-center gap-2">
                        <p className=" py-1 bg-white rounded-sm  text-center ">
                          {item.numMatr}{" "}
                        </p>
                        <p className=" py-1 bg-white rounded-sm  text-center capitalize ">
                          {item.prenoms}
                        </p>
                        <p className=" py-1 bg-white rounded-sm  text-center ">
                          {item.niveau}
                        </p>
                        <p className=" py-1 bg-white rounded-sm  text-center ">
                          {item.email}
                        </p>
                      </div>
                    );
                  }
                  return null;
                }
              })}

              <div className=" w-full flex items-center justify-center gap-12 mt-6">
                <p className=" text-2xl">
                  <span className=" text-red-400"> {nombreDeNonPaiment}</span>/
                  {nombreTotalEtudiant} <span className=" text-sm">éleves</span>
                </p>
                <p className=" text-2xl">
                  Montant :{" "}
                  <span className=" text-xl">
                    <span className=" text-red-400">
                      {" "}
                      {nombreDeNonPaiment * montant}
                    </span>
                  </span>{" "}
                  / {nombreTotalEtudiant * montant}Ar
                </p>
                <p className=" text-2xl  text-red-400">
                  {(nombreDeNonPaiment * 100) / nombreTotalEtudiant}
                  <span className=" text-base"> %</span>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
