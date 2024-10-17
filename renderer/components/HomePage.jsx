import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Navbar from './Navbar';
import Topbar from './Topbar';
import Etudiant from './Etudiant';
import Frais from './Frais';
import Paiement from './Paiement';

export default function HomePage() {
  const { user } = useSelector((state) => state.user);
  const [activeMenu, setActiveMenu] = useState(user.isAdmin ? 'e' : 'f');
  const handleMenu = (value) => {
    setActiveMenu(value);
  };

  return (
    <>
      <div className=" w-full h-screen flex flex-col overflow-hidden  ">
        <Topbar />
        <div className=" flex w-full h-full">
          <Navbar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
          {activeMenu === 'e' ? (
            <Etudiant />
          ) : activeMenu === 'f' ? (
            <Frais />
          ) : (
            <Paiement />
          )}
        </div>
      </div>
    </>
  );
}
