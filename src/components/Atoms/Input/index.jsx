import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import FONTFAMILY from "../../../variables/font_family";

const Input = ({ defaultValue = "", onEditComplete }) => {
  const ref = useRef(null);
  useEffect(() => {
    ref.current.value = defaultValue;
    ref.current.focus();
    ref.current.onblur = (e) => {
      onEditComplete(e.target.value);
    };
    ref.current.onkeypress = (e) => {
      if (e.key === "Enter") onEditComplete(e.target.value);
    };
  }, []);
  return <StyledInput ref={ref} />;
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
