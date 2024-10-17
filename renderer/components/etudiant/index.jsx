import React, { useEffect, useState } from 'react';
import Topbar from '../Topbar';
import Navbar from '../Navbar';
import MenuStudent from './MenuStudent';
import AddStudentForm from './AddStudentForm';
import ListeStudent from './ListeStudent';
import { IoAddCircleOutline } from 'react-icons/io5';

export default function Etudiant() {
  const [addStudentForm, setAddStudentForm] = useState(false);

  const afficheAddStudent = () => {
    !addStudentForm ? setAddStudentForm(true) : setAddStudentForm(false);
  };
  const [all, setAll] = useState(true);
  const [l1, setL1] = useState(false);
  const [l2, setL2] = useState(false);
  const [l3, setL3] = useState(false);
  const [m1, setM1] = useState(false);
  const [m2, setM2] = useState(false);

  const deleteAll = (setHook) => {
    setAll(false);
    setL1(false);
    setL2(false);
    setL3(false);
    setM1(false);
    setM2(false);
    setHook(true);
  };

  const [data, setData] = useState([]);
  const getStudents = async () => {
    try {
      const res = await fetch(
        'http://localhost:5000/api/student/getAllStudents'
      ).then((res) => res.json());
      setData(res.students);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    (async () => await getStudents())();
  }, []);

  return (
    <>
      <div className=" w-full h-full flex flex-col overflow-hidden">
        {addStudentForm && (
          <AddStudentForm afficheAddStudent={afficheAddStudent} />
        )}

        <div className=" bg-[rgb(247,247,247)] w-full h-full ">
          <div className=" w-full grid grid-cols-7 gap-1  bg-white pb-1">
            <MenuStudent
              state={all}
              label={'Tous'}
              onClick={() => deleteAll(setAll)}
            />
            <MenuStudent
              state={l1}
              label={'L1'}
              onClick={() => deleteAll(setL1)}
            />
            <MenuStudent
              state={l2}
              label={'L2'}
              onClick={() => deleteAll(setL2)}
            />
            <MenuStudent
              state={l3}
              label={'L3'}
              onClick={() => deleteAll(setL3)}
            />
            <MenuStudent
              state={m1}
              label={'M1'}
              onClick={() => deleteAll(setM1)}
            />
            <MenuStudent
              state={m2}
              label={'M2'}
              onClick={() => deleteAll(setM2)}
            />

            <div
              className="flex items-center gap-2 bg-orange-400 py-2 px-4 cursor-pointer rounded-sm justify-center"
              onClick={afficheAddStudent}
            >
              <IoAddCircleOutline size={'1.2rem'} className=" text-white" />
              <p className="uppercase text-white">Ajouter</p>
            </div>
          </div>
          <div className=" w-full h-full flex flex-col gap-[0.35rem] py-2 px-4">
            {all && (
              <>
                {data.map((item) => (
                  <ListeStudent
                    key={item._id}
                    id={item._id}
                    nom={item.nom}
                    prenoms={item.prenoms}
                    numMatr={item.numMatr}
                    niveau={item.niveau}
                    email={item.email}
                  />
                ))}
              </>
            )}
            {l1 && (
              <>
                {data.map(
                  (item) =>
                    item.niveau === 'L1' && (
                      <ListeStudent
                        key={item._id}
                        id={item.__id}
                        nom={item.nom}
                        prenoms={item.prenoms}
                        numMatr={item.numMatr}
                        niveau={item.niveau}
                        email={item.email}
                      />
                    )
                )}
              </>
            )}
            {l2 && (
              <>
                {data.map(
                  (item) =>
                    item.niveau === 'L2' && (
                      <ListeStudent
                        key={item._id}
                        id={item.__id}
                        nom={item.nom}
                        prenoms={item.prenoms}
                        numMatr={item.numMatr}
                        niveau={item.niveau}
                        email={item.email}
                      />
                    )
                )}
              </>
            )}
            {l3 && (
              <>
                {data.map(
                  (item) =>
                    item.niveau === 'L3' && (
                      <ListeStudent
                        key={item._id}
                        id={item.__id}
                        nom={item.nom}
                        prenoms={item.prenoms}
                        numMatr={item.numMatr}
                        niveau={item.niveau}
                        email={item.email}
                      />
                    )
                )}
              </>
            )}
            {m1 && (
              <>
                {data.map(
                  (item) =>
                    item.niveau === 'M1' && (
                      <ListeStudent
                        key={item._id}
                        id={item.__id}
                        nom={item.nom}
                        prenoms={item.prenoms}
                        numMatr={item.numMatr}
                        niveau={item.niveau}
                        email={item.email}
                      />
                    )
                )}
              </>
            )}
            {m2 && (
              <>
                {data.map(
                  (item) =>
                    item.niveau === 'M2' && (
                      <ListeStudent
                        key={item._id}
                        id={item.__id}
                        nom={item.nom}
                        prenoms={item.prenoms}
                        numMatr={item.numMatr}
                        niveau={item.niveau}
                        email={item.email}
                      />
                    )
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
