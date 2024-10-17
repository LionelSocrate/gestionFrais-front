import React, { useEffect, useState } from 'react';
import { IoAddCircleOutline } from 'react-icons/io5';
import ListeFrais from './ListeFrais';
import AddFraisForm from './AddFraisForm';

export default function Frais() {
  const [total, setTotal] = useState(0);

  const [addFraisForm, setAddFraisForm] = useState(false);

  const afficheAddFrais = () => {
    !addFraisForm ? setAddFraisForm(true) : setAddFraisForm(false);
  };
  const [data, setData] = useState([]);

  const getFrais = async () => {
    try {
      const res = await fetch(
        'http://localhost:5000/api/frais/getAllFrais'
      ).then((res) => res.json());
      setData(res.frais);
      const nums = res.frais.map((fr) => fr.montant);
      const somme = nums.reduce((acc, curr) => acc + curr, 0);
      setTotal(somme);
      console.log(total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async () => await getFrais())();
  }, []);

  return (
    <>
      <div className=" w-full h-full flex flex-col overflow-hidden ">
        {addFraisForm && <AddFraisForm afficheAddFrais={afficheAddFrais} />}
        <div className=" bg-[rgb(247,247,247)] w-full h-full ">
          <div className=" w-full flex items-center gap-2 bg-white pb-1">
            <div className=" w-full py-2 rounded-sm bg-[rgb(247,247,247)] uppercase text-center text-blue-400 tracking-wide font-bold ">
              liste de tous les frais
            </div>
            <div
              className=" w-max  flex items-center gap-2  bg-orange-400 py-2 px-4  cursor-pointer rounded-sm"
              onClick={afficheAddFrais}
            >
              <IoAddCircleOutline size={'1.2rem'} className=" text-white" />
              <p className=" uppercase text-white">Ajouter</p>
            </div>
          </div>
          <div className=" w-full h-full flex flex-col gap-[0.35rem] py-2 px-4">
            {data.map((item) => (
              <ListeFrais
                id={item._id}
                nom={item.nomFrais}
                niveau={item.niveau}
                dateEcheance={item.dateEcheance}
                montant={item.montant}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
