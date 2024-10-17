import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { updatePersistInfos } from '../redux/slices/persistSlice';

const apiUrl = 'http://localhost:5000/api/auth/login';

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleChange = (e, type) => {
    if (error) {
      setError(false);
    }
    if (type === 'e') {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.post(apiUrl, { email, password });
    if (data?.error) {
      setError(true);
    } else {
      dispatch(updatePersistInfos({ token: data.token }));
    }
  };

  return (
    <>
      <div className="h-full w-full flex justify-center">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className="flex gap-6 justify-center items-center">
            <img src="/images/logo.png" className="w-mx-auto h-20" />
            <h2 className=" uppercase font-extrabold text-green-400 text-3xl">
              ENI<span className=" uppercase text-blue-400 text-3xl">PAYE</span>
            </h2>{' '}
          </div>
          <div className="mt-12 flex flex-col items-center">
            <form onSubmit={handleSubmit} className="w-full flex-1 mt-8">
              <div className="my-12 border-b text-center">
                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                  Ajouter vos identifiants
                </div>
              </div>

              <div className="mx-auto max-w-xs">
                {error && (
                  <p className="mb-5 text-red-500 text-sm text-center bg-red-200 py-4 rounded-md">
                    Email ou Mot de passe incorrect !
                  </p>
                )}
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => handleChange(e, 'e')}
                />
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white my-5"
                  type="password"
                  placeholder="Mot de passe"
                  value={password}
                  onChange={(e) => handleChange(e, 'p')}
                />
                <button
                  type="submit"
                  className="tracking-wide font-semibold bg-green-400 text-white-500 w-full py-4 rounded-lg hover:bg-green-500 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none gap-4"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                  <span className="ml-">Se connecter</span>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex-1 bg-green-100 text-center hidden lg:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/background.svg')" }}
          ></div>
        </div>
      </div>
    </>
  );
}
