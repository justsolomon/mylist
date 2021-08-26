import React from "react";
import Icon from "@chakra-ui/icon";
import { HStack, Text, VStack } from "@chakra-ui/layout";
import {
  faCheck,
  faGlobeAfrica,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import VisibilityProps from "../visibilityInterface";

interface VisibilityOptionProps extends VisibilityProps {
  /** Description of the visibility option */
  description: string;

  /** Boolean to show whether the option is the current selected one */
  selected: boolean;
}

export function VisibilityIcon({ isPrivate }: { isPrivate: boolean }) {
  return (
    <Icon boxSize="12px" color={isPrivate ? "red.500" : "green.500"}>
      <FontAwesomeIcon icon={isPrivate ? faLock : faGlobeAfrica} />
    </Icon>
  );
}

function VisibilityOption({
  name,
  description,
  selected,
}: VisibilityOptionProps) {
  return (
    <VStack align="flex-start" spacing="0">
      <HStack spacing="3" align="center">
        <VisibilityIcon isPrivate={name === "Private"} />
        <Text fontSize="15px">{name}</Text>
        {selected && (
          <Icon boxSize="12px">
            <FontAwesomeIcon icon={faCheck} />
          </Icon>
        )}
      </HStack>
      <Text color="gray.400" fontSize="13px">
        {description}
      </Text>
    </VStack>
  );
}

export default React.memo(VisibilityOption);
