import React from "react";
import { Button } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { HStack } from "@chakra-ui/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HeaderButtonProps } from "../../global/Header/HeaderButtonWrapper";

interface BoardHeaderButtonProps extends HeaderButtonProps {
  /**Color of icon if it's custom */
  color?: string;

  /** Width of the button */
  width?: string;
}

function BoardHeaderButton({
  icon,
  onClick,
  color,
  children,
  width,
}: BoardHeaderButtonProps) {
  return (
    <HStack
      as={Button}
      color="gray.200"
      fontWeight="normal"
      borderRadius="4px"
      minW={width && width}
      px={width ? "4" : "2"}
      size={width ? "md" : "sm"}
      justifyContent={width && "left"}
      bg="hsla(0, 0%, 100%, .2)"
      _hover={{ bg: "hsla(0, 0%, 100%, .1)" }}
      _active={{ bg: "hsla(0, 0%, 100%, .05)" }}
      onClick={onClick}
    >
      <Icon boxSize="16px" color={color && color}>
        <FontAwesomeIcon icon={icon} />
      </Icon>
      {children}
    </HStack>
  );
}

export default BoardHeaderButton;
