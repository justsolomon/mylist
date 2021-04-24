import React from "react";
import { HStack } from "@chakra-ui/layout";
import BoardTitle from "../BoardTitle";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import BoardHeaderButton from "../BoardHeaderButton";
import BoardHeaderVisibilityMenu from "../BoardHeaderVisibilityMenu";
import BoardMenu from "../BoardMenu";

interface BoardHeaderProps {
  /** Title of the board */
  title: string;

  /** Boolean to know whether a board is starred */
  starred: boolean;

  /** A function for updating a board's value */
  updateBoardValue: (key: string, value: string | boolean) => void;
}

function BoardHeader({ title, starred, updateBoardValue }: BoardHeaderProps) {
  return (
    <HStack justify="space-between" wrap="wrap" px="4" py="2">
      <HStack wrap="wrap">
        <BoardTitle
          title={title}
          updateTitleValue={(value: string) => updateBoardValue("title", value)}
        />
        <BoardHeaderVisibilityMenu
          setPrivacy={(value) => updateBoardValue("private", value)}
        />
        <BoardHeaderButton
          icon={faStar}
          color={starred && "yellow.300"}
          onClick={() => updateBoardValue("starred", !starred)}
        />
      </HStack>
      <BoardMenu />
    </HStack>
  );
}

export default React.memo(BoardHeader);
