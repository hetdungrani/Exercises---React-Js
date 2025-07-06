import React from "react";
import Header from "../../Others/Header";
import TaskNumberList from "../../Others/TaskNumberList";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = (props) => {
  return (
    <>
      <Header changeUser={props.changeUser} data={props.data}/>
      <TaskNumberList data={props.data}/>
      <TaskList data={props.data}/>
    </>
  );
};

export default EmployeeDashboard;
