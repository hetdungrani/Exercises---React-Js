import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
function TaskList({ data }) {
  return (
    <div
      id="taskList"
      className="px-15 overflow-x-auto  h-[400px] mt-10 flex items-center justify-start w-full  gap-5"
    >
      {data.tasks.map((elem,indx) => {
        if (elem.active) {
          return <AcceptTask key={indx} data={elem}/>;
        }
        if (elem.newTask) {
          return <NewTask key={indx} data={elem}/>;
        }
        if (elem.completed) {
          return <CompleteTask key={indx} data={elem}/>;
        }
        if (elem.failed) {
          return <FailedTask key={indx} data={elem}/>;
        }
      })}
    </div>
  );
}

export default TaskList;
