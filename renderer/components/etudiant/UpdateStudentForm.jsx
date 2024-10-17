import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

export default function updateStudentForm({
  handleAfficheUpdate,
  id,
  nom,
  prenoms,
  email,
  numMatr,
}) {
  const [nomUpdate, setNomUpdate] = useState({ value: "", valid: false });
  const [prenomsUpdate, setPrenomsUpdate] = useState({
    value: "",
    valid: false,
  });
  const [niveau, setNiveau] = useState("L1");
  const [numMatrUpdate, setNumMatrUpdate] = useState({
    value: "",
    valid: false,
  });
  const [emailUpdate, setEmailUpdate] = useState({ value: "", valid: false });
  useEffect(() => {
    setNomUpdate({ value: nom });
    setPrenomsUpdate({ value: prenoms });
    setNumMatrUpdate({ value: numMatr });
    setEmailUpdate({ value: email });
  }, []);

  const studentUpdated = async (e) => {
    await fetch(`http://localhost:5000/api/student/updateStudent/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nom: nomUpdate.value,
        prenoms: prenomsUpdate.value,
        numMatr: numMatrUpdate.value,
        niveau: niveau,
        email: emailUpdate.value,
      }),
    }).then((res) => res.json());
  };

  return (
    <>
      <div className=" fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-[rgb(0,0,0,0.15)] ">
        <form
          action=""
          className=" relative bg-white rounded-md px-8 py-6 flex flex-col items-center gap-4  "
          onSubmit={studentUpdated}
        >
          <div
            className=" cursor-pointer absolute top-2 right-2 flex items-center justify-center  w-7 h-7 rounded-full bg-green-400"
            onClick={handleAfficheUpdate}
          >
            <IoClose size={"1.2rem"} className=" text-white" />
          </div>
          <p className=" text-xl uppercase text-green-400  font-extrabold">
            Modification d'Etudiant
          </p>
          <div className=" w-full h-[0.5px] bg-green-400 "></div>
          <div className=" flex flex-col gap-3">
            <div className=" flex flex-col gap-1">
              <label htmlFor="nom">Nom</label>
              <input
                type="text"
                value={nomUpdate.value}
                className=" outline-none border border-green-400 w-[22rem] px-4 py-1 "
                onChange={(e) => {
                  setNomUpdate((prev) => ({
                    ...prev,
                    value: e.target.value,
                  }));
                }}
              />
            </div>
            <div className=" w-full flex flex-col gap-1">
              <label htmlFor="nom">Prenoms</label>
              <input
                type="text"
                value={prenomsUpdate.value}
                className=" outline-none border  border-green-400  w-full px-4 py-1 "
                onChange={(e) => {
                  setPrenomsUpdate((prev) => ({
                    ...prev,
                    value: e.target.value,
                  }));
                }}
              />
            </div>
            <div className=" w-full flex items-center gap-2">
              <div className=" w-1/2 flex flex-col gap-1">
                <label for="nom">N°Matr</label>
                <input
                  type="text"
                  name="num_etudiant"
                  value={numMatrUpdate.value}
                  className=" outline-none border border-green-400 w-full px-4 py-1 "
                  onChange={(e) => {
                    setNumMatrUpdate((prev) => ({
                      ...prev,
                      value: e.target.value,
                    }));
                  }}
                />
              </div>
              <div className=" w-1/2 flex flex-col gap-1">
                <label for="nom">Niveau</label>
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
            </div>
            <div className=" flex flex-col gap-1">
              <p>Email</p>
              <input
                type="email"
                value={emailUpdate.value}
                className=" outline-none border border-green-400 w-full px-4 py-1 "
                onChange={(e) => {
                  setEmailUpdate((prev) => ({
                    ...prev,
                    value: e.target.value,
                  }));
                }}
              />
            </div>
          </div>
          <button
            className=" uppercase text-white bg-green-300 rounded-sm w-full py-2"
            onClick={() => studentUpdated()}
          >
            modifier
          </button>
        </form>
      </div>
    </>
  );
}
