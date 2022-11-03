import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import pencil from "../../../assets/svg/pencil.svg";

const EditButton = ({ checked }) => {
  return (
    <StyledButton onClick={checked}>
      <HoverCircle />
      <PencilImg src={pencil} />
    </StyledButton>
  );
};
export default EditButton;

const StyledButton = styled.button``;

const HoverCircle = styled.div`
width:20px;
height:20px;
border-radius:50%;
background-color:${COLOR.LIGHT_GRAY};
transition:0.2s;
`;

const PencilImg = styled.img`
  width: 15px;
  height: 15px;
`;
