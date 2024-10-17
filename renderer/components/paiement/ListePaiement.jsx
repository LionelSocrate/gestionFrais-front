import React, { useState } from 'react';
import DeletePaiement from './DeletePaiement';
import UpdatePaiement from './UpdatePaiement';

export default function ListePaiement({
  id,
  numMatr,
  frais,

  date,
}) {
  const [afficheUpdate, setAfficheUpdate] = useState(false);
  const [afficheDelete, setAfficheDelete] = useState(false);
  const handleAfficheDelete = () => {
    !afficheDelete ? setAfficheDelete(true) : setAfficheDelete(false);
  };
  const handleAfficheUpdate = () => {
    !afficheUpdate ? setAfficheUpdate(true) : setAfficheUpdate(false);
  };

  const getPaiement = async (id) => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/paiement/paiementInfo/${id}`
      ).then((res) => res.json());
    } catch (error) {
      console.log(error);
    }
  };
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };
  return (
    <>
      {afficheDelete && (
        <DeletePaiement
          handleAfficheDelete={handleAfficheDelete}
          id={id}
          numMatr={numMatr}
          frais={frais}
          date={date}
        />
      )}
      {afficheUpdate && (
        <UpdatePaiement
          handleAfficheUpdate={handleAfficheUpdate}
          id={id}
          numMatr={numMatr}
          frais={frais}
        />
      )}
      <div className=" w-full grid grid-cols-5 gap-2 " key={id}>
        <p className=" bg-white rounded-sm flex items-center justify-center py-1">
          {numMatr}
        </p>
        <p className=" bg-white rounded-sm flex items-center justify-center py-1">
          {frais}
        </p>

        <p className="   bg-white rounded-sm flex items-center justify-center py-1">
          {formatDate(date)}
        </p>
        <p
          className=" bg-red-500 text-white rounded-sm flex items-center justify-center cursor-pointer"
          onClick={() => {
            getPaiement(id);
            handleAfficheDelete();
          }}
        >
          Supprimer
        </p>
        <p
          className=" bg-green-400 text-white rounded-sm flex items-center justify-center  cursor-pointer"
          onClick={() => {
            getPaiement(id);
            handleAfficheUpdate();
          }}
        >
          Modifier
        </p>
      </div>
    </>
  );
}
