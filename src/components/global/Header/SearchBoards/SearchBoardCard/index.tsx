import React from "react";
import { Box, HStack, Text } from "@chakra-ui/layout";
import Icon from "@chakra-ui/icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { BoardCardProps } from "../../../../allboards/BoardCard";
import { useHistory } from "react-router";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { getUserSuccess } from "../../../../../redux/user/get/getUserActions";
import updateBoard from "../../../../../redux/board/update/updateBoardService";

function SearchBoardCard({ bg, title, starred, id }: BoardCardProps) {
  const history = useHistory();
  const dispatch = useDispatch();
  const { data } = useSelector((state: RootStateOrAny) => state.user);
  const { boards } = data;

  const starBoard = () => {
    //update on client side
    let boardIndex = boards.findIndex((board: any) => board._id === id);
    boards[boardIndex].starred = !starred;

    let updatedUser = { ...data, boards };
    dispatch(getUserSuccess(updatedUser));

    //update on server
    dispatch(updateBoard({ starred: !starred }, id));
  };

  return (
    <HStack
      spacing="0"
      w="100%"
      justify="space-between"
      cursor="pointer"
      borderRadius="4px"
      role="group"
      onClick={() => history.push(`/board/${id}`)}
    >
      <Box bg={bg} bgSize="cover" h="40px" w="15%" borderStartRadius="4px">
        <Box
          h="40px"
          w="100%"
          bg="rgba(255, 255, 255, .1)"
          _groupHover={{ bg: "rgba(255, 255, 255, 0)" }}
        />
      </Box>
      <Box
        bg={bg}
        bgSize="cover"
        bgRepeat="no-repeat"
        w="85%"
        borderEndRadius="4px"
      >
        <HStack
          h="40px"
          px="3"
          justify="space-between"
          bg="rgba(255, 255, 255, .4)"
          _groupHover={{ bg: "rgba(255, 255, 255, .2)" }}
        >
          <Text
            w="75%"
            color="black"
            fontSize="15px"
            fontWeight="medium"
            overflow="hidden"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
          >
            {title}
          </Text>
          <Icon
            fontWeight="bold"
            color={starred ? "yellow.300" : "black"}
            boxSize="14px"
            d={!starred && "none"}
            _hover={{ boxSize: "16px" }}
            _groupHover={{ display: "block" }}
            onClick={(e) => {
              e.stopPropagation();
              starBoard();
            }}
          >
            <FontAwesomeIcon icon={faStar} />
          </Icon>
        </HStack>
      </Box>
    </HStack>
  );
}

export default SearchBoardCard;
