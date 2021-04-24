import React from "react";
import { Button } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { Stack } from "@chakra-ui/layout";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface HeaderButtonProps {
  /** Icon of button */
  icon: IconProp;

  /** Boolean to know whether to reverse flex display of button */
  reverse?: boolean;

  /** Callback run when the button is clicked */
  onClick: React.MouseEventHandler;

  children?: React.ReactNode;
}

function HeaderButtonWrapper({
  children,
  icon,
  reverse,
  onClick,
}: HeaderButtonProps) {
  return (
    <Button
      color="#fff"
      borderRadius="4px"
      h={["30px", "35px"]}
      minW={["8", "10"]}
      px={["0", "3"]}
      bg="hsla(0, 0%, 100%, .3)"
      _hover={{ bg: "hsla(0, 0%, 100%, .2)" }}
      _active={{ bg: "hsla(0, 0%, 100%, .1)" }}
      onClick={onClick}
    >
      <Stack direction={reverse ? "row-reverse" : "row"} align="center">
        <Icon boxSize="16px">
          <FontAwesomeIcon icon={icon} />
        </Icon>
        {children}
      </Stack>
    </Button>
  );
}

export default React.memo(HeaderButtonWrapper);
