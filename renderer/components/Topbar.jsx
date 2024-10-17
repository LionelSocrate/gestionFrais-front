import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Button, Tooltip } from 'antd';
import { IoLogOut } from 'react-icons/io5';
import { updatePersistInfos } from '../redux/slices/persistSlice';
import { removeUserInfos } from '../redux/slices/userSlice';

export default function Topbar({}) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const handleLogout = () => {
    dispatch(updatePersistInfos({ token: '' }));
    dispatch(removeUserInfos());
    window.location.reload();
  };

  return (
    <div className=" w-full flex items-center bg-[var(--white)]  py-4">
      <div className="flex items-center gap-2 cursor-pointer w-[17rem] pl-6">
        <div className="flex gap-5 justify-center items-center">
          <img src="/images/logo.png" className="w-mx-auto h-10" />
          <h2 className=" uppercase font-extrabold text-green-400 text-2xl">
            ENI<span className=" uppercase text-blue-400 text-2xl">PAYE</span>
          </h2>{' '}
        </div>
      </div>
      <div className="flex items-center justify-between flex-1 px-4">
        <div className="">
          <Button
            danger
            icon={<IoLogOut />}
            onClick={handleLogout}
            size="large"
          >
            Déconnexion
          </Button>
        </div>
        <div className="flex items-center gap-3">
          <Tooltip title={`${user.email}`}>
            <Avatar
              style={{
                backgroundColor: 'rgb(96 165 250)',
                color: 'white',
              }}
              size={40}
            >
              {user.name.charAt(0).toUpperCase()}
              {user.firstname.charAt(0).toUpperCase()}
            </Avatar>
          </Tooltip>
          <div className="flex flex-col justify-center">
            <p>
              {user.name} {user.firstname}
            </p>
            <p className="text-sm text-slate-400">
              @{user.isAdmin ? 'admin' : 'user'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
