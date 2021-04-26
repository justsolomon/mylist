import React from "react";
import { HStack, Text, VStack } from "@chakra-ui/layout";
import Icon from "@chakra-ui/icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import CardDescriptionInput from "./CardDescriptionInput";
import { Button } from "@chakra-ui/button";
import { updateValueIfChanged } from "../../../utils/TitleUtils";

export interface DescriptionProps
  extends React.ComponentPropsWithoutRef<"span"> {
  /** Description of the card */
  description: string;

  /** To update the description of the card */
  updateDescription?: (value: string) => void;

  /** Update description on blur */
  updateDescOnBlur?: () => void;
}

function CardDescription({ description, updateDescription }: DescriptionProps) {
  const cardDescRef = React.createRef<HTMLDivElement>();

  const editDescription = () => {
    cardDescRef.current.focus();
  };

  const updateDescOnBlur = () => {
    let newDesc = cardDescRef.current.textContent;

    updateValueIfChanged(description, newDesc, () =>
      updateDescription(newDesc)
    );
  };

  return (
    <HStack align="flex-start" spacing={["2", "4"]} w="100%">
      <Icon mt="6px" boxSize="18px">
        <FontAwesomeIcon icon={faAlignLeft} />
      </Icon>

      <VStack align="flex-start" w="100%" spacing="3">
        <HStack>
          <Text fontSize="md" fontWeight="bold">
            Description
          </Text>
          <Button
            fontWeight="normal"
            size="sm"
            borderRadius="3px"
            visibility={description.length ? "visible" : "hidden"}
            bg="rgba(0, 0, 0, .03)"
            _hover={{ bg: "rgba(0, 0, 0, .1)" }}
            _active={{ bg: "rgba(0, 0, 0, .15)" }}
            onClick={editDescription}
          >
            Edit
          </Button>
        </HStack>
        <CardDescriptionInput
          description={description}
          updateDescOnBlur={updateDescOnBlur}
          ref={cardDescRef}
        />
      </VStack>
    </HStack>
  );
}

export default CardDescription;
