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

const HoverCircle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${COLOR.LIGHT_GRAY};
  transition: 0.2s;
  opacity: 0;
`;

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
  &:hover > ${HoverCircle} {
    opacity: 0.2;
  }
`;

const PencilImg = styled.img`
  position: absolute;
  width: 15px;
  height: 15px;
`;
