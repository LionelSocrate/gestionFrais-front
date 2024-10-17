import React, { useState } from 'react';
import DeleteFrais from './DeleteFrais';
import UpdateFrais from './UpdateFrais';
import Detail from './Detail';

export default function ListeFrais({
  id,
  nom,
  montant,
  niveau,
  dateEcheance,
  description,
}) {
  const [detail, setDetail] = useState(false);
  const [global, setGlobal] = useState(true);

  const handleDetail = () => {
    setGlobal(false);
    setDetail(true);
  };
  const handleGlobal = () => {
    setDetail(false);
    setGlobal(true);
  };

  const [afficheUpdate, setAfficheUpdate] = useState(false);
  const [afficheDelete, setAfficheDelete] = useState(false);
  const handleAfficheDelete = () => {
    !afficheDelete ? setAfficheDelete(true) : setAfficheDelete(false);
  };
  const handleAfficheUpdate = () => {
    !afficheUpdate ? setAfficheUpdate(true) : setAfficheUpdate(false);
  };

  const getFrais = async (id) => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/frais/fraisInfo/${id}`
      ).then((res) => res.json());
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {afficheDelete && (
        <DeleteFrais
          id={id}
          nom={nom}
          montant={montant}
          dateEcheance={dateEcheance}
          handleAfficheDelete={handleAfficheDelete}
        />
      )}
      {afficheUpdate && (
        <UpdateFrais
          id={id}
          nom={nom}
          montant={montant}
          dateEcheance={dateEcheance}
          handleAfficheUpdate={handleAfficheUpdate}
        />
      )}
      {detail && (
        <Detail
          handleGlobal={handleGlobal}
          id={id}
          nom={nom}
          niveau={niveau}
          dateEcheance={dateEcheance}
          montant={montant}
        />
      )}
      {global && (
        <div className=" w-full grid grid-cols-7 gap-2 " key={id}>
          <p className=" bg-white uppercase rounded-sm flex items-center justify-center py-1">
            {nom}
          </p>
          <p className=" bg-white rounded-sm flex items-center justify-center py-1">
            {montant} Ar
          </p>
          <p className=" bg-white rounded-sm flex items-center justify-center py-1">
            {niveau}
          </p>
          <p className=" bg-white rounded-sm flex items-center justify-center py-1">
            {dateEcheance}
          </p>

          <p
            className=" bg-red-500 text-white rounded-sm flex items-center justify-center cursor-pointer"
            onClick={() => {
              getFrais(id);
              handleAfficheDelete();
            }}
          >
            Supprimer
          </p>
          <p
            className=" bg-green-400 text-white rounded-sm flex items-center justify-center  cursor-pointer"
            onClick={() => {
              getFrais(id);
              handleAfficheUpdate();
            }}
          >
            Modifier
          </p>
          <p
            className=" bg-violet-400 text-white rounded-sm flex items-center justify-center  cursor-pointer"
            onClick={() => {
              getFrais(id);
              handleDetail();
            }}
          >
            Consulter
          </p>
        </div>
      )}
    </>
  );
}
