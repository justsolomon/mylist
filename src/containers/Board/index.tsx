import React, { useEffect } from "react";
import { Box, Center } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import BoardContent from "../../components/board/BoardContent";
import BoardHeader from "../../components/board/BoardHeader";
import MainLayout from "../../components/global/MainLayout";
import { getBoardSuccess } from "../../redux/board/get/getBoardActions";
import getBoard from "../../redux/board/get/getBoardService";
import updateBoard from "../../redux/board/update/updateBoardService";

function BoardContainer() {
  const dispatch = useDispatch();
  const { data, loading } = useSelector(
    (state: RootStateOrAny) => state.board.index
  );
  //@ts-ignore
  const { id } = useParams();

  useEffect(() => {
    //fetch board only if board id in state doesn't match new id
    if (data._id !== id) dispatch(getBoard(id));
  }, [id]);

  const updateBoardValue = (key: string, value: string | boolean) => {
    //update data on client side
    data[key] = value;
    dispatch(getBoardSuccess(data));

    dispatch(updateBoard({ [key]: value }, id));
  };

  return (
    <MainLayout
      bg={loading ? "#fff" : data?.fullBackground || data?.background}
    >
      {loading ? (
        <Center mt="4">
          <Spinner />
        </Center>
      ) : (
        <Box>
          <BoardHeader
            title={data?.title}
            starred={data?.starred}
            updateBoardValue={updateBoardValue}
          />
          <Box position="relative" w="100%">
            <BoardContent lists={data?.lists} boardId={id} boardData={data} />
          </Box>
        </Box>
      )}
    </MainLayout>
  );
}

export default BoardContainer;
