import React, { useEffect } from "react";
import { Box, Text, VStack } from "@chakra-ui/layout";
import Icon from "@chakra-ui/icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import updateBoard from "../../../redux/board/update/updateBoardService";
import { useToast } from "@chakra-ui/toast";
import errorToast from "../../../utils/toast/errorToast";
import { useHistory } from "react-router";
import { getUserSuccess } from "../../../redux/user/get/getUserActions";

export interface BoardCardProps {
  /** Background image of the board */
  bg: string;

  /** Title of the board */
  title: string;

  /** Boolean to know whether a board is starred */
  starred: boolean;

  /** Id of the board */
  id: string;

  starBoard?: () => void;
}

function BoardCard({ bg, title, starred, id }: BoardCardProps) {
  const history = useHistory();
  const dispatch = useDispatch();
  const toast = useToast();
  const { user, board } = useSelector((state: RootStateOrAny) => state);
  const { error } = board;
  const { boards } = user.data;

  const starBoard = () => {
    //update on client side
    let boardIndex = boards.findIndex((board: any) => board._id === id);
    boards[boardIndex].starred = !starred;

    let updatedUser = { ...user.data, boards };
    dispatch(getUserSuccess(updatedUser));

    //update on server
    dispatch(updateBoard({ starred: !starred }, id));
  };

  useEffect(() => {
    if (error) {
      toast({
        description: error,
        ...errorToast,
      });
    }
  }, [error]);

  return (
    <Box
      bg={bg}
      bgSize="cover"
      cursor="pointer"
      borderRadius="5px"
      onClick={() => history.push(`/board/${id}`)}
    >
      <VStack
        align="flex-end"
        justify="space-between"
        h="100px"
        p="3"
        role="group"
        bg="rgba(0, 0, 0, .15)"
        color="#fff"
        _hover={{ bg: "rgba(0, 0, 0, .2)" }}
      >
        <Text w="100%" fontWeight="bold">
          {title}
        </Text>
        <Icon
          color={starred && "yellow.300"}
          boxSize="12px"
          d={!starred && "none"}
          _hover={{ boxSize: "14px" }}
          _groupHover={{ display: "block" }}
          onClick={(e) => {
            e.stopPropagation();
            starBoard();
          }}
        >
          <FontAwesomeIcon icon={faStar} />
        </Icon>
      </VStack>
    </Box>
  );
}

export default BoardCard;
