import { HiOutlineUserGroup } from 'react-icons/hi';
import { IoBagAddOutline } from 'react-icons/io5';
import { LiaMoneyCheckAltSolid } from 'react-icons/lia';
import { useSelector } from 'react-redux';

export default function Navbar({ activeMenu, setActiveMenu }) {
  const { user } = useSelector((state) => state.user);
  const handleMenu = (value) => {
    setActiveMenu(value);
  };

  return (
    <>
      <div className="  h-[90vh] flex flex-col justify-between bg-[var(--white)]  py-12">
        <div className=" flex flex-col ">
          {user.isAdmin && (
            <div
              className={` w-full flex items-center gap-4 px-8 pr-20 cursor-pointer  ${
                activeMenu === 'e' ? ' bg-blue-300 text-white' : ''
              } hover:text-white  hover:bg-blue-200 py-5 transition-all duration-100`}
              onClick={() => handleMenu('e')}
            >
              <i>
                <HiOutlineUserGroup size={'1.2rem'} />
              </i>
              <span className=" min-w-max">Liste des étudiants</span>
            </div>
          )}
          <div
            className={` w-full flex items-center gap-4 px-8 cursor-pointer  ${
              activeMenu === 'f' ? ' bg-blue-300 text-white' : ''
            } hover:text-white  hover:bg-blue-200 py-5 transition-all duration-100`}
            onClick={() => handleMenu('f')}
          >
            <i>
              <IoBagAddOutline size={'1.2rem'} />
            </i>
            <span className=" min-w-max">Frais scolaires</span>
          </div>
          <div
            className={` w-full flex items-center gap-4 px-8 cursor-pointer  ${
              activeMenu === 'p' ? ' bg-blue-300 text-white' : ''
            } hover:text-white  hover:bg-blue-200 py-5 transition-all duration-100`}
            onClick={() => handleMenu('p')}
          >
            <i>
              <LiaMoneyCheckAltSolid size={'1.2rem'} />
            </i>
            <span className=" min-w-max">Statut de payement </span>
          </div>
        </div>
      </div>
    </>
  );
}
