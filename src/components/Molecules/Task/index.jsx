import React, { useState } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import StyledButton from "../../../components/Atoms/EditButton";
import CheckboxBody from "../../../components/Atoms/Checkbox";
import StyledInput from "../../../components/Atoms/Input";

const Task = ({
  onEditComplete,
  onTaskComplete,
  taskName,
  defaultIsEditing,
}) => {
  const [isEditing, setisEditing] = useState(defaultIsEditing);

  const onEditState = () => {
    setisEditing(true);
  };

  return (
    <StyledTask>
      <CheckboxBody onClick={onTaskComplete} />
      {isEditing ? (
        <StyledInput
          defaultValue={taskName}
          onEditComplete={(taskName) => {
            onEditComplete(taskName);
            setisEditing(false);
          }}
        />
      ) : (
        <StyledTaskArea>
          <StyledTaskName>{taskName}</StyledTaskName>
          <StyledButton onClick={onEditState} />
        </StyledTaskArea>
      )}
    </StyledTask>
  );
};
export default Task;

const StyledTask = styled.div`
  display: flex;
  padding:2px 6px;
`;

const StyledTaskArea = styled.div`
  display: flex;
  width: 100%;
`;

const StyledTaskName = styled.div`
  ${TEXT.S}
  color:${COLOR.LIGHT_GRAY}
`;
