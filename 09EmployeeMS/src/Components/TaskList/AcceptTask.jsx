import React from "react";

function AcceptTask({data}) {
  return (
    <div className="h-full rounded-md bg-green-400 w-[400px] flex-shrink-0">
      <div className="flex justify-between p-5 items-center">
        <h1 className="bg-red-600 rounded-md text-md px-3 py-1">{data.category}</h1>
        <h1 className="text-md "> {data.date}</h1>
      </div>
      <h1 className="text-3xl font-semibold px-3">{data.title}</h1>
      <p className="text-xl font-medium px-3 mt-3 ">
       {data.description}
      </p>
      <div className="flex flex-col gap-3 items-center px-4 w-full mt-8 text-xl">
        <button className="bg-green-700 w-full p-3 hover:cursor-pointer">Mark As Completed</button>
        <button className="bg-red-700 p-3 w-full hover:cursor-pointer">Mark As Failed</button>
      </div>
    </div>
  );
}

export default AcceptTask;
