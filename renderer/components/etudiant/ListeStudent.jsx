import React, { useState } from "react";
import AddStudentForm from "./AddStudentForm";
import DeleteStudent from "./DeleteStudent";
import UpdateStudent from "./UpdateStudentForm";

export default function ListeStudent({
  id,
  numMatr,
  nom,
  prenoms,
  niveau,
  email,
  afficheDeleteStudent,
  afficheUpdateStudent,
}) {
  const [afficheUpdate, setAfficheUpdate] = useState(false);
  const [afficheDelete, setAfficheDelete] = useState(false);
  const handleAfficheDelete = () => {
    !afficheDelete ? setAfficheDelete(true) : setAfficheDelete(false);
  };
  const handleAfficheUpdate = () => {
    !afficheUpdate ? setAfficheUpdate(true) : setAfficheUpdate(false);
  };

  const getStudent = async (id) => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/student/studentInfo/${id}`
      ).then((res) => res.json());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {afficheDelete && (
        <DeleteStudent
          handleAfficheDelete={handleAfficheDelete}
          id={id}
          nom={nom}
          prenoms={prenoms}
        />
      )}
      {afficheUpdate && (
        <UpdateStudent
          handleAfficheUpdate={handleAfficheUpdate}
          id={id}
          nom={nom}
          prenoms={prenoms}
          email={email}
          numMatr={numMatr}
        />
      )}
      <div className=" max-w-full grid grid-cols-12 gap-2 " key={id}>
        <p className=" bg-white rounded-sm flex items-center justify-center py-1">
          {numMatr}
        </p>
        <p className=" col-[2/5] bg-white  rounded-sm flex items-center justify-center py-1 uppercase">
          {nom}
        </p>
        <p className=" col-[5/8] bg-white  rounded-sm flex items-center justify-center py-1 capitalize">
          {prenoms}
        </p>
        <p className=" bg-white rounded-sm flex items-center justify-center py-1">
          {niveau}
        </p>
        <p className=" col-[9/11] bg-white  rounded-sm flex items-center justify-center py-1">
          {email}
        </p>
        <p
          className=" bg-red-500 text-white rounded-sm flex items-center justify-center cursor-pointer"
          onClick={() => {
            getStudent(id);
            handleAfficheDelete();
          }}
        >
          supprimer
        </p>
        <p
          className=" bg-green-400 text-white rounded-sm flex items-center justify-center  cursor-pointer"
          onClick={() => {
            getStudent(id);
            handleAfficheUpdate();
          }}
        >
          Modifier
        </p>
      </div>
    </>
  );
}
