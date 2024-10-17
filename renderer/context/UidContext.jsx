'use client';

import { createContext, useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserInfos } from '../redux/slices/userSlice';
import axios from 'axios';

const apiUrl = `http://localhost:5000/api`;
export const UidContext = createContext();

export default function UidContextProvider({ children }) {
  const dispatch = useDispatch();

  const { token } = useSelector((state) => state.persistInfos);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (token) {
      (async () => {
        const { data } = await axios.get(
          `${apiUrl}/auth/validate-token/${token}`
        );
        if (data?.user) {
          dispatch(fetchUserInfos({ user: data.user }));
          setIsLoggedIn(true);
        } else {
          dispatch(fetchUserInfos({ user: '' }));
          setIsLoggedIn(false);
        }
      })();
    }
  }, [token]);

  const toastStyle = {
    style: {
      border: '1px solid var(--primary-color)',
      padding: '0.8rem',
      color: 'var(--white)',
      background: 'var(--primary-color)',
    },
    iconTheme: {
      primary: 'var(--white)',
      secondary: 'var(--primary-color)',
    },
  };

  return (
    <UidContext.Provider
      value={{
        apiUrl,
        toastStyle,
        isLoggedIn,
      }}
    >
      {children}
      <Toaster />
    </UidContext.Provider>
  );
}
