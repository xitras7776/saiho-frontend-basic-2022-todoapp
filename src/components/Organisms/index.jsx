import React, { useState } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import Task from "../../../components/Molecules/Task";
import AddTaskButton from "../../../components/Atoms/AddTaskButton";

const TodoCard = () =>{
    const [taskList,setTaskList] = useState([]);
    return (
        <StyledTodoCard>
            <AddTaskButton onClick={onAddTaskButtonClick = () =>
            <StyledTaskList/>}/>
            <Task/>
        </StyledTodoCard>
    );
};

export default TodoCard;

const StyledTodoCard = styled.div`
`;