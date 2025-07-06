import React from "react";
import { useState } from "react";

function Login({handleLogin}) {
  const [email, setEmail] = useState("");
  const [password, setPasswoed] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(email, password);
    handleLogin(email,password)
    setEmail("");
    setPasswoed("");
  };
  return (
    <div className=" h-screen w-screen flex items-center justify-center ">
      <div className="border-2 border-gray-500 p-10">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center p-20  "
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="bg-transparent border-2 border-green-500 rounded-full placeholder:text-gray-400 px-5 py-3 text-2xl text-white outline-none"
            type="email"
            placeholder="Enter your Email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPasswoed(e.target.value);
            }}
            required
            className="bg-transparent border-2 border-green-500 rounded-full placeholder:text-gray-400 px-5 py-3  mt-3 text-2xl text-white outline-none"
            type="password"
            placeholder="Enter Password"
          />
          <button className=" rounded-full bg-green-500 hover:cursor-pointer w-full px-5 py-3  mt-5 text-2xl text-white outline-none">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
