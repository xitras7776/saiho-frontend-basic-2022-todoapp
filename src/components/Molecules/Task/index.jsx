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
      <TemporalyInput />
      <StyledButton />
    </StyledTask>
  );
};
export default Task;

const StyledTask = styled.div`
display:flex;
`;
const TemporalyInput = styled.input`
width: 100%;
${TEXT.S};
font-family: ${FONTFAMILY.NOTO_SANS};
padding: 0 4px;
border: none;
border-radius: 2px;
outline: none;
color: ${COLOR.LIGHT_GRAY};
background-color: ${COLOR.BLACK};
margin-left:10px;
`;
