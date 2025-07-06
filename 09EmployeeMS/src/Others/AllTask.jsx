import React, { useContext } from "react";
import { AuthContext } from "../Context/Authprovider";

const AllTask = () => {
  const [userData,setUserData] = useContext(AuthContext);
  return (
    <div className="mt-5 px-15 py-5">
      <div id="Alltask" className=" bg-neutral-400/20  p-4 text-xl  ">
        <div className="bg-red-400 p-4 flex items-center mb-3 justify-between rounded h-[20%] overflow-auto">
          <h1 className="w-1/5">Employee Name</h1>
          <h5 className="w-1/5">New Task</h5>
          <h5 className="w-1/5">Complete Task</h5>
          <h5 className="w-1/5">Accept Task</h5>
          <h5 className="w-1/5">Failed Task</h5>
        </div>
        <div>
          {userData.map(function (elem,indx) {
            return (
              <div key={indx} className="border-2 border-gray-400/30 p-4 flex items-center mb-3 justify-between rounded">
                <h1 className="w-1/5">{elem.firstName}</h1>
                <h5  className="w-1/5 " >{elem.taskNumber.newTask}</h5>
                <h5 className="w-1/5" >{elem.taskNumber.completed}</h5>
                <h5 className="w-1/5" >{elem.taskNumber.active}</h5>
                <h5 className="w-1/5" >{elem.taskNumber.failed}</h5>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AllTask;
