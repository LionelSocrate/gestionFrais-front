import React, { useEffect, useState } from "react";
import Navbar from "../components/home/Navbar";
import Topbar from "../components/home/Topbar";
import ListePaiement from "../components/paiement/ListePaiement";
import { IoAddCircleOutline } from "react-icons/io5";
import AddPaiement from "../components/paiement/AddPaiement";

export default function Paiement() {
  const [addPaiementForm, setAddPaiementForm] = useState(false);

  const afficheAddPaiment = () => {
    !addPaiementForm ? setAddPaiementForm(true) : setAddPaiementForm(false);
  };
  const [data, setData] = useState([]);

  const getPaiement = async () => {
    try {
      const res = await fetch(
        "http://localhost:5000/api/paiement/getAllPaiements"
      ).then((res) => res.json());
      setData(res.paiements);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    (async () => await getPaiement())();
    console.log(data);
  }, []);
  return (
    <>
      {addPaiementForm && <AddPaiement afficheAddPaiment={afficheAddPaiment} />}
      <div className=" w-full h-screen flex flex-col overflow-hidden  ">
        <Topbar />
        <div className=" flex w-full h-full">
          <Navbar />
          <div className=" bg-[rgb(247,247,247)] w-full h-full ">
            <div className=" w-full  flex items-center gap-2   bg-white pb-1 pr-1">
              <div className=" w-full py-1 rounded-sm bg-[rgb(247,247,247)] uppercase text-center text-blue-400 tracking-wide font-bold ">
                liste de tous les payements
              </div>
              <div
                className=" w-max  flex items-center gap-2    bg-orange-400 py-1 px-4  cursor-pointer rounded-sm"
                onClick={afficheAddPaiment}
              >
                <IoAddCircleOutline size={"1.2rem"} className=" text-white" />
                <p className=" uppercase text-white  tracking-wide font-bold">
                  Nouvelle
                </p>
              </div>
            </div>
            <div className=" w-full h-full flex flex-col gap-[0.35rem] py-2 px-4">
              {data.map((item) => (
                <ListePaiement
                  id={item._id}
                  numMatr={item.numMatr}
                  frais={item.frais}
                  mode={item.mode}
                  montant={item.montant}
                  date={item.date}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
