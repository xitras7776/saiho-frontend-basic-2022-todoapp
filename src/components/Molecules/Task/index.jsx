import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import FONTFAMILY from "../../../variables/font_family";
import StyledButton from "../../../components/Atoms/EditButton"
import CheckboxBody from "../../../components/Atoms/Checkbox"


const Task = () => {
  return (
    <StyledTask>
        <CheckboxBody/>
      <StyledButton />
    </StyledTask>
  );
};
export default Task;

const StyledTask = styled.div`
display:flex;
`;

