import Icon from "@chakra-ui/icon";
import { HStack, Text } from "@chakra-ui/layout";
import { MenuItem } from "@chakra-ui/menu";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface MenuItemProps {
  /** Icon of the menu item */
  icon: IconProp;

  /** Call to action text for the menu item */
  cta: string;

  /** Callback run once item is clicked */
  onClick: React.MouseEventHandler;
}

function ProfileMenuItem({ cta, icon, onClick }: MenuItemProps) {
  return (
    <MenuItem as={HStack} onClick={onClick} spacing="3" py="3" cursor="pointer">
      <Icon color="gray.500">
        <FontAwesomeIcon icon={icon} />
      </Icon>
      <Text fontSize="15px">{cta}</Text>
    </MenuItem>
  );
}

export default ProfileMenuItem;
