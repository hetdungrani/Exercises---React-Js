import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../Utils/LocalStorage";
export const AuthContext = createContext();

function Authprovider({ children }) {
  // localStorage.clear();
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    setLocalStorage();
    // getLocalStorage();
  });
  useEffect(() => {
    const { employees } = getLocalStorage();
    setUserData( employees);
  }, []);
  return (
    <div>
      <AuthContext.Provider value={[userData,setUserData]}>{children}</AuthContext.Provider>
    </div>
  );
}

export default Authprovider;
