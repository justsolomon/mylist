import React from "react";
import Icon from "@chakra-ui/icon";
import { HStack, Text } from "@chakra-ui/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface SidebarCardProps {
  /** Icon for the sidebar card */
  icon: IconProp;

  /** Name of the sidebar card */
  name: string;

  /** Boolean to show whether current card is active */
  active: boolean;
}

function SidebarCard({ icon, name, active }: SidebarCardProps) {
  return (
    <HStack
      w="100%"
      borderRadius="md"
      py="2"
      px="4"
      align="center"
      cursor="pointer"
      color={active && "blue.500"}
      bg={active && "#E4F0F6"}
    >
      <Icon boxSize="14px">
        <FontAwesomeIcon icon={icon} />
      </Icon>
      <Text fontWeight="medium" fontSize="15px">
        {name}
      </Text>
    </HStack>
  );
}

export default SidebarCard;
