import React from "react";
import { Input } from "@chakra-ui/input";

interface SearchBoardInputProps {
  /** Array to get search results from */
  boards: any[];

  /** Callback to update the search results */
  updateSearchResults: (results: any[]) => void;
}

function SearchBoardInput({
  boards,
  updateSearchResults,
}: SearchBoardInputProps) {
  const getResults = (wordToMatch: string, boards: any[]) => {
    const regex = new RegExp(wordToMatch, "gi");
    return boards.filter((board) => board.title.match(regex));
  };

  return (
    <Input
      borderRadius="4px"
      placeholder="Find boards by name..."
      onChange={(e) => {
        const { value } = e.target;
        if (!value) updateSearchResults(null);
        else {
          const results = getResults(value, boards);
          updateSearchResults(results);
        }
      }}
    />
  );
}

export default SearchBoardInput;
