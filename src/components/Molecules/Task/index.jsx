import React,{ useState } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import FONTFAMILY from "../../../variables/font_family";
import StyledButton from "../../../components/Atoms/EditButton";
import CheckboxBody from "../../../components/Atoms/Checkbox";
import StyledInput from "../../../components/Atoms/Input";

const Task = () => {
  const [isEditing, setisEditing] = useState(defaultIsEditing);

  const onEditState = () => {
    setisEditing(true);
  };
  const onCompeteTask = () => {
    setisEditing(false);
    onTaskComplete();
  };
  const onCompleteEdit = () => {
    setisEditing(false);
    onEditComplete();
  };

  return (
    <StyledTask>
      <CheckboxBody onClick={onCompeteTask} />
      <StyledInput
        defaultValue={defaultValue}
        onEditComplete={onCompleteEdit}
      />
      <StyledButton onClick={onEditState} />
    </StyledTask>
  );
};
export default Task;

const StyledTask = styled.div`
  display: flex;
`;
