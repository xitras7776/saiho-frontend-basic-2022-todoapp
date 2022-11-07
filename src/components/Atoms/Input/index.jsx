import React,{ useRef, useEffect } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import FONTFAMILY from "../../../variables/font_family";

const Input = () => {
  return <StyledInput />;
};

export default Input;

const StyledInput = styled.input`
  width: 100%;
  ${TEXT.S};
  font-family: ${FONTFAMILY.NOTO_SANS};
  padding: 0 4px;
  border: none;
  border-radius: 2px;
  outline: none;
  color: ${COLOR.LIGHT_GRAY};
  background-color: ${COLOR.BLACK};
`;
