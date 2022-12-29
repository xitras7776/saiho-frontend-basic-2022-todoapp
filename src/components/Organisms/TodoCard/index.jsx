import React, { useState } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import Task from "../../Molecules/Task";
import AddTaskButton from "../../Atoms/AddTaskButton";

const TodoCard = () => {
  const [taskList, setTaskList] = useState([]);

  const onAddTaskButtonClick = () => {
    const addTask = {
      name: "",
      initializing: true,
    };
    setTaskList([...taskList, addTask]);
  };

  const onTaskComplete = (index) => {
    let newList = [...taskList];
    newList = newList.filter((task, i) => {
      return i !== index;
    });
    setTaskList(newList);
  };

  const onTaskNameChange = (value, index) => {
    if (value === "") {
      const fillteredTaskList = taskList.splice(index, 1);
      setTaskList(fillteredTaskList);
    } else {
      const updatedTaskList = [...taskList];
      updatedTaskList[index].name = value;
      console.log(updatedTaskList);
      setTaskList(updatedTaskList);
    }
  };
  return (
    <StyledTodoCard>
      <AddTaskButton onClick={onAddTaskButtonClick} />
      {taskList.map((taskName, index) => (
        <Task
          key={index}
          onTaskComplete={() => onTaskComplete(index)}
          onEditComplete={(value) => onTaskNameChange(value, index)}
          taskName={taskName.name}
          defaultIsEditing={taskName.initializing}
        />
      ))}
    </StyledTodoCard>
  );
};

export default TodoCard;

const StyledTodoCard = styled.div`
  background-color: ${COLOR.BLACK};
`;
