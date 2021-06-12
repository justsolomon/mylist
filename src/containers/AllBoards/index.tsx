import React, { useEffect } from "react";
import { Center, HStack } from "@chakra-ui/layout";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import getUser from "../../redux/user/get/getUserService";
import SideBar from "../../components/allboards/SideBar";
import { Spinner } from "@chakra-ui/spinner";
import BoardSectionList from "../../components/allboards/BoardSectionList";
import NetworkError from "../../components/global/NetworkError";
import useStorage from "../../hooks/useStorage";

function AllBoardsContainer() {
  const dispatch = useDispatch();
  const { data, loading, success, error } = useSelector(
    (state: RootStateOrAny) => state.user
  );
  const { updateAuthStatus } = useStorage();

  useEffect(() => {
    //only fetch user if data isn't available in state
    if (!data.boards) dispatch(getUser());
  }, [data]);

  useEffect(() => {
    if (success) {
      updateAuthStatus(true, data);
    }
  }, [success]);

  return (
    <HStack
      py={["4", , "6", "8"]}
      px={["2", "4", "8", "24"]}
      spacing={["0", , "6"]}
      align="flex-start"
      w="100%"
    >
      <SideBar />
      {loading ? (
        <Center w={["100%", , "75%"]}>
          <Spinner color="blue.700" />
        </Center>
      ) : error === "Network Error" ? (
        <NetworkError retryRequest={() => dispatch(getUser())} />
      ) : (
        <BoardSectionList allBoards={data.boards} id={data._id} />
      )}
    </HStack>
  );
}

export default AllBoardsContainer;
