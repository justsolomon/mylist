import React, { useState } from "react";
import Icon from "@chakra-ui/icon";
import { Box, HStack, Text, VStack } from "@chakra-ui/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BoardSectionProps } from "../../../../allboards/BoardSection";
import SearchBoardCard from "../SearchBoardCard";
import { IconButton } from "@chakra-ui/button";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

function SearchBoardSection({ boards, icon, name }: BoardSectionProps) {
  const [boardsVisible, setBoardsVisible] = useState(true);

  return boards?.length ? (
    <Box w="100%" color="gray.600">
      <HStack mb="1" justify="space-between">
        <HStack pl="3">
          <Icon boxSize="14px">
            <FontAwesomeIcon icon={icon} />
          </Icon>
          <Text fontSize="13px" letterSpacing="0.003px" lineHeight="100%">
            {name}
          </Text>
        </HStack>
        <IconButton
          icon={<FontAwesomeIcon icon={boardsVisible ? faMinus : faPlus} />}
          size="sm"
          variant="ghost"
          aria-label={boardsVisible ? "Hide boards" : "Show boards"}
          onClick={() => setBoardsVisible(!boardsVisible)}
        />
      </HStack>
      <VStack w="100%">
        {boardsVisible &&
          boards?.map(({ background, title, _id, starred }, index) => (
            <SearchBoardCard
              bg={background}
              title={title}
              key={index}
              id={_id}
              starred={starred}
            />
          ))}
      </VStack>
    </Box>
  ) : null;
}

export default SearchBoardSection;
