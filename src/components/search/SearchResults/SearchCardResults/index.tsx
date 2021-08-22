import React from "react";
import { VStack } from "@chakra-ui/react";
import SearchCard from "./SearchCard";

interface ISearchCard {
  _id: string;
  title: string;
  description: string;
  listId: { _id: string; title: string };
  boardId: { _id: string; title: string; private: boolean };
}

function SearchCardResults({ cards }: { cards: ISearchCard[] }) {
  return (
    <VStack w="100%">
      {cards.map((card) => {
        const { _id, title, description, listId, boardId } = card;

        return (
          <SearchCard
            id={_id}
            title={title}
            hasDescription={description.length > 0}
            listTitle={listId.title}
            boardId={boardId._id}
            boardTitle={boardId.title}
            boardPrivate={boardId.private}
            key={_id}
          />
        );
      })}
    </VStack>
  );
}

export default SearchCardResults;
