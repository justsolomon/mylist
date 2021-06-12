import React, { useEffect, useState } from "react";
import { Box, Divider, HStack, Text } from "@chakra-ui/layout";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { useDisclosure } from "@chakra-ui/hooks";
import BoardHeaderButton from "../BoardHeaderButton";
import { Modal, ModalContent } from "@chakra-ui/modal";
import UserTagList from "./UserTagList";
import InviteMenuInput from "./InviteMenuInput";
import UsersAutocomplete from "./UsersAutocomplete";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { searchUsersSuccess } from "../../../redux/search/users/searchUsersActions";
import SendInvitationButton from "./SendInvitationButton";
import { sendBoardInvite } from "../../../redux/board/update/updateBoardService";
import { IBoardMember } from "../BoardMember";

interface IInviteUserMenu {
  user: IBoardMember;
}

function InviteUserMenu({ user }: IInviteUserMenu) {
  const [users, setUsers] = useState<string[]>([]);
  const [inputActive, setInputActive] = useState<boolean>(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const {
    inviteLoading: loading,
    data,
    inviteSuccess,
  } = useSelector((state: RootStateOrAny) => state.board.index);

  const closeModal = () => {
    setUsers([]);
    dispatch(searchUsersSuccess([]));
    setInputActive(false);
    onClose();
  };

  useEffect(() => {
    if (inviteSuccess) closeModal();
  }, [inviteSuccess]);

  return (
    <Box position="relative">
      <BoardHeaderButton icon={faUsers} onClick={onOpen}>
        <Text>Invite</Text>
      </BoardHeaderButton>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalContent w="325px" p="4" borderRadius="sm">
          <Text align="center" color="gray.500" fontSize="15px">
            Invite to board
          </Text>
          <Divider mt="1" mb="3" borderWidth="1px" />
          <HStack
            pr="2"
            minH="32px"
            wrap="wrap"
            w="100%"
            border="1px"
            borderColor="gray.400"
            borderRadius="4px"
            role="group"
            placeholder="Email Address or name"
            tabIndex={0}
            _focusWithin={{
              borderColor: "#3182ce",
              boxShadow: "0 0 0 1px #3182ce !important",
            }}
          >
            <UserTagList users={users} setUsers={setUsers} />
            <InviteMenuInput setInputActive={setInputActive} />
          </HStack>
          <UsersAutocomplete
            users={users}
            setUsers={setUsers}
            inputActive={inputActive}
          />
          <SendInvitationButton
            loading={loading}
            disabled={!users.length}
            onClick={() => {
              dispatch(
                sendBoardInvite(
                  data._id,
                  data.title,
                  user.firstName,
                  user.username,
                  users
                )
              );
            }}
          />
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default InviteUserMenu;
