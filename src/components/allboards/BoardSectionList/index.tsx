import React from "react";
import { VStack } from "@chakra-ui/layout";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import BoardSection from "../BoardSection";
import { faProductHunt } from "@fortawesome/free-brands-svg-icons";
import NoBoards from "../NoBoards";

interface SectionListProps {
  /** Array containing all boards */
  allBoards: any[];
}

function BoardSectionList({ allBoards }: SectionListProps) {
  return allBoards?.length ? (
    <VStack w={["100%", , "75%"]} align="flex-start" spacing="8">
      <BoardSection
        name="Starred boards"
        boards={allBoards?.filter((board: any) => board.starred)}
        icon={faStar}
      />
      <BoardSection
        name="Personal boards"
        boards={allBoards?.filter((board: any) => !board.starred)}
        icon={faProductHunt}
      />
    </VStack>
  ) : (
    <NoBoards />
  );
}

export default BoardSectionList;
