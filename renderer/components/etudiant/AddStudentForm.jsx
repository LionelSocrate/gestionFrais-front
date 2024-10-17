import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

export default function AddStudentForm({ afficheAddStudent }) {
  const [nom, setNom] = useState({ value: "", valid: false });
  const [prenoms, setPrenoms] = useState({ value: "", valid: false });
  const [niveau, setNiveau] = useState({ value: "L1", valid: true });
  const [numMatr, setNumMatr] = useState({ value: "", valid: false });
  const [email, setEmail] = useState({ value: "", valid: false });

  const [error, setError] = useState("");

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  useEffect(() => {
    //nom
    if (nom.value?.trim()?.length > 2) {
      if (!nom.valid) {
        setNom((prev) => ({ ...prev, valid: true }));
      }
    } else {
      if (nom.valid) {
        setNom((prev) => ({ ...prev, valid: false }));
      }
    }

    //prenom
    if (prenoms.value?.trim()?.length > 2) {
      if (!prenoms.valid) {
        setPrenoms((prev) => ({ ...prev, valid: true }));
      }
    } else {
      if (prenoms.valid) {
        setPrenoms((prev) => ({ ...prev, valid: false }));
      }
    }

    //numMatr
    if (numMatr.value?.trim() !== "") {
      if (!numMatr.valid) {
        setNumMatr((prev) => ({ ...prev, valid: true }));
      }
    } else {
      if (numMatr.valid) {
        setNumMatr((prev) => ({ ...prev, valid: false }));
      }
    }

    //email
    if (emailRegex.test(email.value?.trim())) {
      if (!email.valid) {
        setEmail((prev) => ({ ...prev, valid: true }));
      }
    } else {
      if (email.valid) {
        setEmail((prev) => ({ ...prev, valid: false }));
      }
    }
  }, [nom.value, prenoms.value, niveau.value, numMatr.value, email.value]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nom.valid) {
      if (prenoms.valid) {
        if (numMatr.valid) {
          if (email.valid) {
            try {
              const newStudent = async () => {
                await fetch("http://localhost:5000/api/student/addStudent", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    nom: nom.value,
                    prenoms: prenoms.value,
                    numMatr: numMatr.value,
                    niveau: niveau.value,
                    email: email.value,
                  }),
                }).then((res) => res.json());
              };
              newStudent();
              afficheAddStudent();
              window.location.reload();
            } catch (err) {
              console.log(err);
            }
          } else {
            console.log("Email invalide");
          }
        } else {
          console.log("numéro matricule invalide");
        }
      } else {
        console.log("prenoms invalides");
      }
    } else {
      console.log("nom invalid");
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
            onClick={afficheAddStudent}
          >
            <IoClose size={"1.2rem"} className=" text-white" />
          </div>
          <p className=" text-xl uppercase text-green-400  font-extrabold">
            Ajout d'Etudiant
          </p>
          <div className=" w-full h-[0.5px] bg-green-400 "></div>
          <div className=" flex flex-col gap-3">
            <div className=" flex flex-col gap-1">
              <label htmlFor="nom">Nom</label>
              <input
                type="text"
                className=" outline-none border border-green-400 w-[22rem] px-4 py-1 "
                onChange={(e) =>
                  setNom((prev) => ({ ...prev, value: e.target.value }))
                }
              />
            </div>
            <div className=" w-full flex flex-col gap-1">
              <label htmlFor="nom">Prenoms</label>
              <input
                type="text"
                className=" outline-none border  border-green-400  w-full px-4 py-1 "
                onChange={(e) => {
                  setPrenoms((prev) => ({ ...prev, value: e.target.value }));
                }}
              />
            </div>
            <div className=" w-full flex items-center gap-2">
              <div className=" w-1/2 flex flex-col gap-1">
                <label htmlFor="num_etudiant">N° Matricule</label>
                <input
                  type="text"
                  name="num_etudiant"
                  className=" outline-none border border-green-400 w-full px-4 py-1 "
                  onChange={(e) => {
                    setNumMatr((prev) => ({ ...prev, value: e.target.value }));
                  }}
                />
              </div>
              <div className=" w-1/2 flex flex-col gap-1">
                <label htmlFor="niveau">Niveau</label>

                <select
                  name="niveau"
                  id=""
                  className=" w-full outline-none border border-green-400  px-4 py-[0.4rem] "
                  onChange={(e) => {
                    setNiveau((prev) => ({ ...prev, value: e.target.value }));
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
                className=" outline-none border border-green-400 w-full px-4 py-1 "
                onChange={(e) => {
                  setEmail((prev) => ({ ...prev, value: e.target.value }));
                }}
              />
            </div>
          </div>
          <button
            type="submit"
            className=" uppercase text-white bg-green-300 rounded-sm w-full py-2"
            onClick={handleSubmit}
          >
            ajouter
          </button>
        </form>
      </div>
    </>
  );
}
