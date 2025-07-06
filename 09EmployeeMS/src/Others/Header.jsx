import React, { useState } from "react";

function Header(props) {
  // const [username,setUsername]=useState('')

  // if (!data) {
  //   setUsername('AAdmin')
  // }
  // else{
  //   setUsername(data.firstName)
  // }

  const logoutUser = () => {
    localStorage.setItem("loggedInUser", "");
    props.changeUser('')
    // window.location.reload();
  };
  return (
    <div className="p-15 ">
      <div className="flex flex-end justify-between">
        <h1 className="text-2xl">
          Hello <br />
          <span className="text-3xl">username 👋</span>
        </h1>

        <button
          onClick={logoutUser}
          className="text-2xl  bg-red-500  rounded-md px-6 hover:cursor-pointer "
        >
          Log out
        </button>
      </div>
    </div>
  );
}

export default Header;
