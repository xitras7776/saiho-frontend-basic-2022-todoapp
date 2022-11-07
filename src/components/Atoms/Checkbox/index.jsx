import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import CHECK from "../../../assets/svg/check.svg";

const Checkbox = ({checked}) => {
  return (
    <CheckboxBody onClick={checked}>
      <CheckImg src={CHECK} />
    </CheckboxBody>
  );
};
export default Checkbox;

const CheckImg = styled.img`
  width: 16px;
  height: 16px;
  opacity: 0;
  color: ${COLOR.GREEN};
`;

const CheckboxBody = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 20px;
  border-radius: 2px;
  background-color: transparent;
  border: 2px solid ${COLOR.LIGHT_GRAY};
  cursor: pointer;
  &:hover > ${CheckImg} {
    opacity: 1;
  }
`;
