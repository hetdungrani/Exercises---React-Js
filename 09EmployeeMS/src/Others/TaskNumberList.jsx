import React from "react";

const TaskNumberList = ({data}) => {
  return (
    <div className="px-15">
      <div className="w-full flex justify-center gap-5">
        <div className="bg-[#E97A74] w-[45%] rounded-md p-10  ">
          <h1 className="text-5xl font-semibold">{data.taskNumber.active}</h1>
          <h2 className="text-2xl font-medium">Active Task</h2>
        </div>
        <div className="bg-[#6CA6F4] w-[45%] rounded-md p-10  ">
          <h1 className="text-5xl font-semibold">{data.taskNumber.completed}</h1>
          <h2 className="text-2xl font-medium">Completed Task</h2>
        </div>
        <div className="bg-[#76D987] w-[45%] rounded-md p-10  ">
          <h1 className="text-5xl font-semibold">{data.taskNumber.failed}</h1>
          <h2 className="text-2xl font-medium">Failed Task</h2>
        </div>
        <div className="bg-[#F6CC3F] w-[45%] rounded-md p-10  ">
          <h1 className="text-5xl font-semibold">{data.taskNumber.newTask}</h1>
          <h2 className="text-2xl font-medium">New Task</h2>
        </div>
      </div>
    </div>
  );
};

export default TaskNumberList;
