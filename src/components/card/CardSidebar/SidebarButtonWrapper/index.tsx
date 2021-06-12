import React from "react";
import { Button } from "@chakra-ui/button";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Icon from "@chakra-ui/icon";

interface SidebarButtonWrapper {
  /** Button cta text */
  text: string;

  /** Icon for the button */
  icon: IconProp;

  /** Boolean to determine if its the delete button */
  deleteButton?: boolean;

  /** Callback to run when the button is clicked */
  onClick?: React.MouseEventHandler;
}

function SidebarButtonWrapper({
  text,
  icon,
  deleteButton,
  onClick,
}: SidebarButtonWrapper) {
  return (
    <Button
      leftIcon={
        <Icon boxSize="14px">
          <FontAwesomeIcon icon={icon} />
        </Icon>
      }
      fontWeight="normal"
      fontSize="sm"
      justifyContent="flex-start"
      size="sm"
      borderRadius="4px"
      py="3"
      w="100%"
      color={!deleteButton ? "gray.700" : "gray.200"}
      bg={!deleteButton ? "rgba(0, 0, 0, .05)" : "#cf513d"}
      _hover={{ bg: !deleteButton ? "rgba(0, 0, 0, .1)" : "#eb5a46" }}
      _groupHover={{ bg: !deleteButton ? "rgba(0, 0, 0, .1)" : "#eb5a46" }}
      colorScheme={deleteButton && "red"}
      onClick={onClick}
    >
      {text}
    </Button>
  );
}

export default SidebarButtonWrapper;
