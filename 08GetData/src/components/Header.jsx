import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-black text-white h-30 flex items-center justify-between text-3xl">
      <h1>LOGO</h1>
      <div className="flex gap-10 ">
        <Link to={"/"}>Home</Link>
        <Link to={"/getdata"}>GetData</Link>
        <Link to={"/about"}>About</Link>
      </div>
    </div>
  );
};

export default Header;
