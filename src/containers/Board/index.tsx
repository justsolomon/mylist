import React, { useEffect } from "react";
import { Box, Center } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router";
import BoardContent from "../../components/board/BoardContent";
import BoardHeader from "../../components/board/BoardHeader";
import MainLayout from "../../components/global/MainLayout";
import { getBoardSuccess } from "../../redux/board/get/getBoardActions";
import getBoard from "../../redux/board/get/getBoardService";
import updateBoard from "../../redux/board/update/updateBoardService";
import { useToast } from "@chakra-ui/toast";
import errorToast from "../../utils/toast/errorToast";
import successToast from "../../utils/toast/successToast";
import SEO from "../../components/global/SEO";
import getImageUrl from "../../utils/GetImageUrl";

function BoardContainer() {
  const dispatch = useDispatch();
  const toast = useToast();
  const location = useLocation();
  const { data, loading, error, success, inviteSuccess } = useSelector(
    (state: RootStateOrAny) => state.board.index
  );
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (error)
      toast({
        ...errorToast,
        description: error,
      });

    if (inviteSuccess)
      toast({
        ...successToast,
        description: inviteSuccess,
      });
  }, [error, success, inviteSuccess]);

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
      <SEO
        prefix={data.title || "Board"}
        path={location.pathname}
        ogImageUrl={`${getImageUrl(data?.background)}&w=1200&h=630`}
        twitterImageUrl={`${getImageUrl(data?.background)}&w=1200&h=630`}
        description={`View ${data.title || ""} board on MyList`}
      />
      {loading ? (
        <Center mt="4">
          <Spinner />
        </Center>
      ) : (
        <Box>
          <BoardHeader
            user={data?.userId}
            members={data?.members}
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
