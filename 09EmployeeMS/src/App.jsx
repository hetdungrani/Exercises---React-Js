import React, { useContext, useState } from "react";
import Login from "./Components/Auth/Login";
import EmployeeDashboard from "./Components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./Components/Dashboard/AdminDashboard";
import { useEffect } from "react";
import { setLocalStorage, getLocalStorage } from "./Utils/LocalStorage";
import { AuthContext } from "./Context/Authprovider";

function App() {

  const [user, setUser] = useState(null);
  const [userData,setUserData] = useContext(AuthContext);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  useEffect(()=>{
    const loggedInUser=localStorage.getItem('loggedInUser')
    if (loggedInUser) {
      const userData=JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  },[])

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == 123) {
      setUser('admin');
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    } else if (userData) {
      const employee = userData.find(
        (e) => e.email == email && e.password == password
      );
      if (employee) {
        setUser('employee');
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee" ,data:employee})
        );
      }
    } else {
      alert("Invalid!");
      console.log("Invalid!");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? (
        <AdminDashboard  changeUser={setUser}/>
      ) : user == 'employee' ? (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
      ) : null}
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard /> */}
    </>
  );
}

export default App;
