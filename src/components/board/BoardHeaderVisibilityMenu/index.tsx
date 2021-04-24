import React from "react";
import { Menu, MenuItem, MenuList } from "@chakra-ui/menu";
import { RootStateOrAny, useSelector } from "react-redux";
import VisibilityOption from "../../createboard/BoardVisibilitySelect/VisibilityOption";
import BoardHeaderVisibilityButton from "../BoardHeaderVisibilityButton";

interface BoardHeaderVisibilityMenuProps {
  /** Function for updating the board privacy */
  setPrivacy: (value: boolean) => void;
}

function BoardHeaderVisibilityMenu({
  setPrivacy,
}: BoardHeaderVisibilityMenuProps) {
  const { private: boardPrivate } = useSelector(
    (state: RootStateOrAny) => state.board.index.data
  );

  return (
    <Menu>
      <BoardHeaderVisibilityButton name={boardPrivate ? "Private" : "Public"} />
      <MenuList py="3" maxW="300px">
        <MenuItem
          onClick={() => {
            if (!boardPrivate) setPrivacy(true);
          }}
        >
          <VisibilityOption
            name="Private"
            description="Only you can see and edit this board."
            selected={boardPrivate}
          />
        </MenuItem>
        <MenuItem
          onClick={() => {
            if (boardPrivate) setPrivacy(false);
          }}
        >
          <VisibilityOption
            name="Public"
            description="Anyone on the internet with the link can see this board. Only you can edit."
            selected={!boardPrivate}
          />
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default BoardHeaderVisibilityMenu;
