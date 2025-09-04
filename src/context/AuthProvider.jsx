import React, { createContext, useEffect, useState } from 'react'
import { getlocalstorage, setlocalstorage } from '../utils/LocalStorage';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setuserData] = useState({
    employees: [],
    admin: []
  });

  useEffect(() => {
    setlocalstorage();
    const data = getlocalstorage();
    setuserData(data);
  }, []);

  return (
    <AuthContext.Provider value={{ userData, setuserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;