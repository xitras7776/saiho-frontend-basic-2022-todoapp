import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import FONTFAMILY from "../../../variables/font_family";
import PLUS from "../../../assets/svg/plus.svg";

const AddTaskButton = ({ onCheck }) => {
  return (
    <AddTaskButtonBody onClick ={onCheck}>
      <HoverEffect />
      <PlusButtonImg src={PLUS} />
      <AddText>タスクを追加</AddText>
    </AddTaskButtonBody>
  );
};
export default AddTaskButton;

const HoverEffect = styled.div`
  position: absolute;
  width: 126px;
  height: 24px;
  background: ${COLOR.GREEN};
  opacity: 0;
  transition: 0.2s;
  border-radius: 12px;
`;

const AddTaskButtonBody = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  width: 126px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  &:hover > ${HoverEffect} {
    opacity: 0.2;
  }
`;

const AddText = styled.p`
  ${TEXT.S};
  font-family: ${FONTFAMILY.NOTO_SANS};
  color: ${COLOR.GREEN};
`;

const PlusButtonImg = styled.img`
  height: 20px;
  width: 20px;
  border-radius: 12px;
  margin-right: 10px;
  color: ${COLOR.GREEN};
`;
