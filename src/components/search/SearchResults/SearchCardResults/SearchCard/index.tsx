import React from "react";
import {
  Box,
  HStack,
  Icon,
  Link as ChakraLink,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { VisibilityIcon } from "../../../../createboard/BoardVisibilitySelect/VisibilityOption";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";

interface SearchCardProps {
  id: string;
  title: string;
  hasDescription: boolean;
  listTitle: string;
  boardId: string;
  boardTitle: string;
  boardPrivate: boolean;
}

function SearchCard({
  id,
  title,
  hasDescription,
  boardId,
  boardTitle,
  boardPrivate,
  listTitle,
}: SearchCardProps) {
  return (
    <HStack w="100%" align="flex-start">
      <ChakraLink
        as={Link}
        to={`/card/${boardId}/${id}`}
        display="block"
        w="40%"
        p="2"
        mr="2"
        bg="gray.100"
        borderRadius="4px"
        cursor="pointer"
        color="gray.700"
        _hover={{ bg: "gray.300", cursor: "pointer" }}
      >
        <Text fontSize="sm" whiteSpace="normal">
          {title}
        </Text>
        {hasDescription && (
          <Icon boxSize="12px">
            <FontAwesomeIcon icon={faAlignLeft} />
          </Icon>
        )}
      </ChakraLink>
      <VStack align="flex-start" spacing="1">
        <ChakraLink
          as={Link}
          to={`/card/${boardId}/${id}`}
          fontWeight="bold"
          fontSize="md"
        >
          {title}
        </ChakraLink>
        <Box color="gray.600" fontSize="sm">
          in&nbsp;
          <Text as="strong">{listTitle}&nbsp;</Text>
          on&nbsp;
          <Text as="strong">{boardTitle}&nbsp;</Text>
          <VisibilityIcon isPrivate={boardPrivate} />
        </Box>
      </VStack>
    </HStack>
  );
}

export default SearchCard;
