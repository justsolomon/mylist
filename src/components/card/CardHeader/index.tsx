import React from "react";
import { HStack, Text, VStack } from "@chakra-ui/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChalkboard } from "@fortawesome/free-solid-svg-icons";
import Icon from "@chakra-ui/icon";

interface CardHeaderProps {
  /** Card title component */
  children: React.ReactNode;

  /** List title */
  listTitle: string;
}

function CardHeader({ children, listTitle }: CardHeaderProps) {
  return (
    <HStack align="flex-start" spacing={["1", "3"]} w="100%">
      <Icon mt="6px" boxSize="18px">
        <FontAwesomeIcon icon={faChalkboard} />
      </Icon>
      <VStack spacing="0" w="90%" align="flex-start">
        {children}
        <Text
          fontSize="sm"
          color="gray.500"
          pl="2"
        >{`in list ${listTitle}`}</Text>
      </VStack>
    </HStack>
  );
}

export default CardHeader;
