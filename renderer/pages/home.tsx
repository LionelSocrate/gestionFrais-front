'use client';
import { useContext } from 'react';
import { UidContext } from '../context/UidContext.jsx';
import Login from '../components/Login.jsx';
import HomePage from '../components/HomePage.jsx';

export default function home() {
  const { isLoggedIn } = useContext(UidContext);

  return <>{isLoggedIn ? <HomePage /> : <Login />}</>;
}
