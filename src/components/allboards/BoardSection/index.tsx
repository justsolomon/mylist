import React from "react";
import { Box, HStack, Text, VStack } from "@chakra-ui/layout";
import BoardCardList from "../BoardCardList";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Icon from "@chakra-ui/icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface BoardSectionProps {
  /** Name of the section */
  name: string;

  /** Boards in the section */
  boards: any[];

  /** Icon for the board section header */
  icon: IconProp;
}

function BoardSection({ name, boards, icon }: BoardSectionProps) {
  return boards?.length ? (
    <Box w="100%" color="gray.600">
      <HStack spacing="3" mb="3" align="center">
        <Icon boxSize="24px">
          <FontAwesomeIcon icon={icon} />
        </Icon>
        <Text
          fontWeight="bold"
          mb="2"
          fontSize="17px"
          letterSpacing="0.003px"
          lineHeight="100%"
        >
          {name}
        </Text>
      </HStack>
      <BoardCardList boards={boards} />
    </Box>
  ) : null;
}

export default BoardSection;
