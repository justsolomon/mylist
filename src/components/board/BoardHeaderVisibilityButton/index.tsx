import React from "react";
import { Button } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { MenuButton } from "@chakra-ui/menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import VisibilityProps from "../../createboard/BoardVisibilitySelect/visibilityInterface";
import { faGlobeAfrica, faLock } from "@fortawesome/free-solid-svg-icons";

function BoardHeaderVisibilityButton({ name }: VisibilityProps) {
  return (
    <MenuButton
      as={Button}
      color="gray.200"
      fontWeight="normal"
      borderRadius="4px"
      px="3"
      size="sm"
      bg="hsla(0, 0%, 100%, .2)"
      _hover={{ bg: "hsla(0, 0%, 100%, .15)" }}
      _active={{ bg: "hsla(0, 0%, 100%, .1)" }}
      leftIcon={
        <Icon boxSize="14px">
          <FontAwesomeIcon icon={name === "Private" ? faLock : faGlobeAfrica} />
        </Icon>
      }
    >
      {name}
    </MenuButton>
  );
}

function arePropsEqual(prevProps: VisibilityProps, nextProps: VisibilityProps) {
  return prevProps.name === nextProps.name;
}

export default React.memo(BoardHeaderVisibilityButton, arePropsEqual);
