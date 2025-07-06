import React, { useState, useEffect, use } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Header, Footer } from "./components";
// import conf from './conf/conf'
function App() {
  // console.log(import.meta.env.VITE_APPWRITE_URL);
  // console.log(conf)

  const [loading, setloading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setloading(false));
  }, []);
  return !loading ? (
    <div className="min-h-screen flex flex-wrap constent-between bg-gray-600">
      <div className="w-full block">
        <Header />
        <main>TODO: {/* <Outlet /> */}</main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
