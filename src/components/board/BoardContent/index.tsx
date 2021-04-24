import React from "react";
import { HStack } from "@chakra-ui/layout";
import AddListContainer from "../../../containers/AddListContainer";
import BoardListsArea, { BoardListsAreaProps } from "../BoardListsArea";
import { useBreakpointValue } from "@chakra-ui/media-query";

function BoardContent(props: BoardListsAreaProps) {
  const scrollSnapType = useBreakpointValue(["x mandatory", , ""]);

  return (
    <HStack
      mt="2"
      align="flex-start"
      px="4"
      mr="4"
      w="100%"
      h="80vh"
      whiteSpace="nowrap"
      overflowX="auto"
      overflowY="hidden"
      position="absolute"
      top="0"
      left="0"
      right="0"
      bottom="0"
      style={{ scrollSnapType }}
    >
      {props.lists?.length ? <BoardListsArea {...props} /> : null}
      <AddListContainer />
    </HStack>
  );
}

export default BoardContent;
