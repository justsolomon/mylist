import React, { useRef } from "react";
import { Box, HStack } from "@chakra-ui/layout";
import BoardListActionsMenu from "./BoardListActionsMenu";
import updateList from "../../../../redux/list/update/updateListService";
import { useDispatch } from "react-redux";
import {
  TitleDefaultStyles,
  TitleFocusStyles,
  updateValueIfChanged,
} from "../../../../utils/TitleUtils";

export interface BoardListHeaderProps {
  /** Title of the list */
  title: string;

  /** Id of the list */
  id: string;

  /** Show card form */
  showForm?: () => void;

  /** Boolean showing whether the list is being dragged */
  isDragging?: boolean;
}

function BoardListHeader({
  title,
  id,
  isDragging,
  showForm,
}: BoardListHeaderProps) {
  const listTitleRef = useRef(null);
  const dispatch = useDispatch();

  const focusListTitle = () => {
    listTitleRef.current.focus();
  };

  return (
    <HStack
      justify="space-between"
      align="flex-start"
      minH="30px"
      bg="#EBECF0"
      px="2"
      pt="2"
      borderTopRadius="4px"
    >
      <Box
        as="span"
        w="220px"
        px="2"
        py="1"
        cursor="pointer"
        {...TitleDefaultStyles}
        fontSize="sm"
        fontWeight="medium"
        _focus={{
          ...TitleFocusStyles,
          bg: "#fff",
        }}
        ref={listTitleRef}
        onClick={(e) => e.preventDefault()}
        onBlur={() => {
          let newTitle = listTitleRef.current?.textContent;

          //set input to previous board title if user wants to update to empty string
          if (newTitle === "") listTitleRef.current.textContent = title;
          else
            updateValueIfChanged(title, newTitle, () =>
              dispatch(updateList({ title: newTitle }, id))
            );
        }}
      >
        {title}
      </Box>
      <BoardListActionsMenu
        title={title}
        id={id}
        focusTitle={focusListTitle}
        addCard={showForm}
        isDragging={isDragging}
      />
    </HStack>
  );
}

export default BoardListHeader;
