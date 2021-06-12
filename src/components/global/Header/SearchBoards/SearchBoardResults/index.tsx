import React from "react";
import { VStack } from "@chakra-ui/layout";
import SearchBoardCard from "../SearchBoardCard";

function SearchBoardResults({ boards }: any) {
  return (
    <VStack>
      {boards.map(({ background, title, starred, _id }: any, index: number) => (
        <SearchBoardCard
          bg={background}
          title={title}
          starred={starred}
          id={_id}
          key={index}
        />
      ))}
    </VStack>
  );
}

export default SearchBoardResults;
