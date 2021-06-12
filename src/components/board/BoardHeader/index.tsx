import React from "react";
import { HStack } from "@chakra-ui/layout";
import BoardTitle from "../BoardTitle";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import BoardHeaderButton from "../BoardHeaderButton";
import BoardHeaderVisibilityMenu from "../BoardHeaderVisibilityMenu";
// import BoardMenu from "../BoardMenu";
import InviteUserMenu from "../InviteUserMenu";
import BoardMember, { IBoardMember } from "../BoardMember";

interface BoardHeaderProps {
  /** Title of the board */
  title: string;

  /** Boolean to know whether a board is starred */
  starred: boolean;

  user: IBoardMember;

  members: IBoardMember[];

  /** A function for updating a board's value */
  updateBoardValue: (key: string, value: string | boolean) => void;
}

function BoardHeader({
  title,
  starred,
  user,
  members,
  updateBoardValue,
}: BoardHeaderProps) {
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
        <HStack spacing="-1">
          <BoardMember {...user} isOwner />
          {members.map((member) => (
            <BoardMember {...member} ownerEmail={user.email} />
          ))}
        </HStack>
        <InviteUserMenu user={user} />
      </HStack>
      {/* <BoardMenu /> */}
    </HStack>
  );
}

export default React.memo(BoardHeader);
