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

  /** Callback to run when the button is clicked */
  onClick: React.MouseEventHandler;
}

function SidebarButtonWrapper({ text, icon }: SidebarButtonWrapper) {
  return (
    <Button
      leftIcon={
        <Icon boxSize="14px">
          <FontAwesomeIcon icon={icon} />
        </Icon>
      }
      fontWeight="medium"
      fontSize="sm"
      isFullWidth
      bg="rgba(0, 0, 0, .1)"
      _hover
    >
      {text}
    </Button>
  );
}

export default SidebarButtonWrapper;
