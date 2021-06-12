import React from "react";
import { VStack } from "@chakra-ui/layout";
import { faStar, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import BoardSection from "../BoardSection";
import { faProductHunt } from "@fortawesome/free-brands-svg-icons";
import NoBoards from "../NoBoards";

interface SectionListProps {
  /** Array containing all boards */
  allBoards: any[];

  id: string;
}

function BoardSectionList({ allBoards, id }: SectionListProps) {
  return allBoards?.length ? (
    <VStack w={["100%", , "75%"]} align="flex-start" spacing="8">
      <BoardSection
        name="Starred boards"
        boards={allBoards?.filter(
          (board: any) => board.starred && board.userId === id
        )}
        icon={faStar}
      />
      <BoardSection
        name="Personal boards"
        boards={allBoards?.filter(
          (board: any) => !board.starred && board.userId === id
        )}
        icon={faProductHunt}
      />
      <BoardSection
        name="Guest boards"
        boards={allBoards?.filter((board: any) => board.members?.includes(id))}
        icon={faUserFriends}
      />
    </VStack>
  ) : (
    <NoBoards />
  );
}

export default BoardSectionList;
