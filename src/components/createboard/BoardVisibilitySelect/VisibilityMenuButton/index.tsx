import React from "react";
import Icon from "@chakra-ui/icon";
import { MenuButton } from "@chakra-ui/menu";
import {
  faChevronDown,
  faGlobeAfrica,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import VisibilityProps from "../visibilityInterface";
import { HStack, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";

function VisibilityMenuButton({ name }: VisibilityProps) {
  return (
    <MenuButton
      as={Button}
      variant="ghost"
      color="#fff"
      fontWeight="normal"
      fontSize="15px"
      borderRadius="sm"
      h="unset"
      py="1"
      px="2"
      _hover={{ bgColor: "#ffffff70" }}
      _active={{ bgColor: "#ffffff80" }}
    >
      <HStack align="center">
        <Icon boxSize="10px">
          <FontAwesomeIcon icon={name === "Private" ? faLock : faGlobeAfrica} />
        </Icon>
        <Text fontSize="sm">{name}</Text>
        <Icon boxSize="10px">
          <FontAwesomeIcon icon={faChevronDown} />
        </Icon>
      </HStack>
    </MenuButton>
  );
}

export default VisibilityMenuButton;
