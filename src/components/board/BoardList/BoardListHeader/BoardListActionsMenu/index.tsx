import React from "react";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { IconButton } from "@chakra-ui/button";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BoardListHeaderProps } from "..";
import DeleteListModal from "../../DeleteListModal";

interface BoardListActionsMenuProps extends BoardListHeaderProps {
  /** To focus on list title input */
  focusTitle: React.MouseEventHandler;

  /** To add a card by making form visible */
  addCard: () => void;
}

function BoardListActionsMenu({
  title,
  id,
  focusTitle,
  addCard,
  isDragging,
}: BoardListActionsMenuProps) {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        variant="ghost"
        size="sm"
        borderRadius="4px"
        icon={<FontAwesomeIcon icon={faEllipsisH} />}
        _hover={{ bg: "rgba(0, 0, 0, .1)" }}
        _active={{ bg: "rgba(0, 0, 0, .2)" }}
      />
      <MenuList>
        <MenuItem onClick={addCard}>Add card</MenuItem>
        <MenuItem onClick={focusTitle}>Edit title</MenuItem>
        <DeleteListModal title={title} id={id} />
      </MenuList>
    </Menu>
  );
}

export default BoardListActionsMenu;
