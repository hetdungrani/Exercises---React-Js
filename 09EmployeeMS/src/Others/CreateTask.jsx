import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/Authprovider";
const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [date, setDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDiscription] = useState("");
  const [newTask, setNewTask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    setNewTask({
      taskTitle,
      date,
      category,
      description,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    });
    const data = userData;
    console.log(data);    

    data.forEach(function (elem) {
      if (assignTo == elem.firstName) {
        elem.tasks.push(newTask);
        elem.taskNumber.newTask = elem.taskNumber.newTask + 1;
      }
    });
    setUserData(data);
    setTaskTitle("");
    setDate("");
    setAssignTo("");
    setCategory("");
    setDiscription("");
  };

  return (
    <div className="px-15">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="  flex bg-neutral-400/20"
      >
        <div className="w-1/2 p-5 ">
          <div>
            <h1 className="text-xl">Task Title</h1>
            <input
              value={taskTitle}
              onChange={(e) => {
                setTaskTitle(e.target.value);
              }}
              className="w-4/5 outline-none border-1  placeholder:text-gray-1 mt-1 mb-6 rounded-sm p-1"
              type="text"
              placeholder="Enter Task"
            />
          </div>
          <div>
            <h1 className="text-xl">Date</h1>
            <input
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
              type="Date"
              className="w-4/5 outline-none text-gray-200 border-white border-1 mt-1 mb-6 rounded-sm p-1"
            />
          </div>
          <div>
            <h1 className="text-xl">Assign to</h1>
            <input
              value={assignTo}
              onChange={(e) => {
                setAssignTo(e.target.value);
              }}
              type="text"
              placeholder="Any Employee"
              className="w-4/5 placeholder:text-gray-1 outline-none border-1 mt-1 mb-6 rounded-sm p-1"
            />
          </div>
          <div>
            <h1 className="text-xl">Category</h1>
            <input
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              type="text"
              placeholder="Design ,Web etc."
              className="w-4/5 placeholder:text-gray-1 outline-none border-1 mt-1 mb-6 rounded-sm p-1"
            />
          </div>
        </div>
        <div className=" w-1/2 p-5">
          <h1 className="text-xl">Description</h1>
          <textarea
            value={description}
            onChange={(e) => {
              setDiscription(e.target.value);
            }}
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Give some Description"
            className="w-4/5 outline-none placeholder:text-gray-1 border-1 mt-1 mb-3 rounded-sm p-1"
          ></textarea>
          <div>
            <button className="w-4/5 text-xl bg-green-400 outline-none  mt-1 mb-2 rounded-sm p-1 hover:cursor-pointer">
              Create Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
