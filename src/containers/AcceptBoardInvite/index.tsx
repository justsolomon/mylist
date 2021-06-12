import React, { useEffect } from "react";
import { Button } from "@chakra-ui/button";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation, useParams } from "react-router";
import MainLayout from "../../components/global/MainLayout";
import useStorage from "../../hooks/useStorage";
import { boardMemberAction } from "../../redux/board/update/updateBoardService";
import { useToast } from "@chakra-ui/toast";
import errorToast from "../../utils/toast/errorToast";
import { Text, VStack } from "@chakra-ui/layout";

function AcceptBoardInviteContainer() {
  const { getStorageValue } = useStorage();
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const toast = useToast();
  const {
    inviteLoading: loading,
    error,
    success,
  } = useSelector((state: RootStateOrAny) => state.board.index);

  //get memberId and boardId from url params
  const { memberId, boardId, firstName, boardName } =
    useParams<{
      memberId: string;
      boardId: string;
      boardName: string;
      firstName: string;
    }>();

  useEffect(() => {
    const loggedIn = getStorageValue("loggedIn");

    if (!loggedIn) history.push("/login", { returnPath: location.pathname });
  }, []);

  useEffect(() => {
    if (success) history.push(`/board/${boardId}`);

    if (error)
      toast({
        ...errorToast,
        description: error,
      });
  }, [error, success]);

  return (
    <MainLayout>
      <VStack mt="4" justify="center">
        <Text>{`${firstName} invited you to join the board ${boardName}.`}</Text>
        <Button
          onClick={() => dispatch(boardMemberAction(boardId, memberId, "join"))}
          isLoading={loading}
          borderRadius="full"
          colorScheme="blue"
          px="6"
        >
          Join board
        </Button>
      </VStack>
    </MainLayout>
  );
}

export default AcceptBoardInviteContainer;
