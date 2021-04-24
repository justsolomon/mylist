import React from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import BoardHeaderButton from "../BoardHeaderButton";
import { Text } from "@chakra-ui/layout";

export interface AddListButtonProps {
  /** Update cta of button according to availability of lists */
  isFirst: boolean;

  onClick: React.MouseEventHandler;
}

function AddListButton({ onClick, isFirst }: AddListButtonProps) {
  return (
    <BoardHeaderButton icon={faPlus} width="270px" onClick={onClick}>
      <Text>{`Add ${isFirst ? "a" : "another"} list`}</Text>
    </BoardHeaderButton>
  );
}

export default AddListButton;
