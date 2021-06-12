import React, { useEffect, useState } from "react";
import { HStack, Text, VStack } from "@chakra-ui/layout";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { Image } from "@chakra-ui/image";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
// import Icon from "@chakra-ui/icon";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUserShield } from "@fortawesome/free-solid-svg-icons";
import ModalSkeleton from "../../global/ModalSkeleton";
import { useDisclosure } from "@chakra-ui/hooks";
import { boardMemberAction } from "../../../redux/board/update/updateBoardService";
import { useHistory } from "react-router";

export interface IBoardMember {
  _id: string;
  imageUrl: string;
  fullName: string;
  username: string;
  email: string;
  firstName?: string;
}

interface BoardMemberProps extends IBoardMember {
  isOwner?: boolean;
  ownerEmail?: string;
}

function BoardMember({
  imageUrl,
  fullName,
  username,
  isOwner,
  email,
  _id,
  ownerEmail,
}: BoardMemberProps) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { user, board } = useSelector((state: RootStateOrAny) => state);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [removeAction, setRemoveAction] = useState<boolean>(true);
  const { data } = user;
  const { inviteLoading: loading, data: boardData, success } = board.index;

  useEffect(() => {
    if (success) {
      if (!removeAction) history.push("/boards");
      onClose();
    }
  }, [success]);

  return (
    <Menu>
      <MenuButton
        _hover={{ opacity: 0.8 }}
        _active={{ opacity: 0.8 }}
        position="relative"
      >
        <Image boxSize="30px" borderRadius="full" src={imageUrl} />
        {/* {isOwner && (
          <Icon
            position="absolute"
            zIndex="2"
            color="blue.500"
            bottom="0"
            right="-4px"
            boxSize="12px"
          >
            <FontAwesomeIcon icon={faUserShield} />
          </Icon>
        )} */}
      </MenuButton>
      <MenuList minW="100px" w="300px">
        <HStack px="4" align="flex-start">
          <Image borderRadius="full" boxSize="50px" src={imageUrl} />
          <VStack align="flex-start" spacing="0">
            <Text fontWeight="medium">{fullName}</Text>
            <Text fontSize="13px" color="gray.500">{`@${username} (${
              isOwner ? "Admin" : "Member"
            })`}</Text>
          </VStack>
        </HStack>
        {!isOwner &&
          (data.email === ownerEmail ? (
            <MenuItem
              fontSize="15px"
              mt="3"
              onClick={() => {
                setRemoveAction(true);
                onOpen();
              }}
            >
              Remove from board
            </MenuItem>
          ) : (
            data.email === email && (
              <MenuItem
                fontSize="15px"
                mt="3"
                onClick={() => {
                  setRemoveAction(false);
                  onOpen();
                }}
              >
                Leave board
              </MenuItem>
            )
          ))}
        <ModalSkeleton
          isOpen={isOpen}
          onClose={onClose}
          header={removeAction ? "Remove member?" : "Leave board?"}
          warning={
            removeAction
              ? "You can add this user back to this board whenever you want by using the invite button."
              : "You will not be able to access this board and its cards unless you are invited by an admin."
          }
          loading={loading}
          colorScheme="red"
          cta={removeAction ? "Remove member" : "Leave board"}
          primaryAction={() =>
            dispatch(boardMemberAction(boardData._id, _id, "leave"))
          }
        />
      </MenuList>
    </Menu>
  );
}

export default BoardMember;
