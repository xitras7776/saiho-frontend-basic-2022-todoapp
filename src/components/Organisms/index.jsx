import React, { useState } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import Task from "../../../components/Molecules/Task";
import AddTaskButton from "../../../components/Atoms/AddTaskButton";

const TodoCard = () => {
  const [taskList, setTaskList] = useState([]);
  const onAddTaskButtonClick = () => {
    const addTask = {
      name: "",
      initializing: true,
    };
    setTaskList(taskList.concat(addTask));
  };
  const onTaskComplete = (index) => {
    const deleteTask = a;
    setTaskList(deleteTask);
  };
  const onTaskNameChange = (value, index) => {
    if (value === "") {
      const deleteTodo = a;
      setTaskList(deleteTodo);
    } else {
      const updateTaskName = a;
      setTaskList(updateTaskName);
    }
  };
  return (
    <StyledTodoCard>
      <AddTaskButton onClick={onAddTaskButtonClick} />
      <Task />
    </StyledTodoCard>
  );
};

export default TodoCard;

const StyledTodoCard = styled.div``;
