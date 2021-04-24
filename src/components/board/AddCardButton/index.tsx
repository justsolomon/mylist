import React from "react";
import { Button } from "@chakra-ui/button";
import { AddListButtonProps } from "../AddListButton";
import { Text } from "@chakra-ui/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function AddCardButton({ isFirst, onClick }: AddListButtonProps) {
  return (
    <Button
      color="gray.500"
      justifyContent="flex-start"
      variant="ghost"
      fontWeight="normal"
      w="254px"
      leftIcon={<FontAwesomeIcon icon={faPlus} />}
      onClick={onClick}
      borderRadius="4px"
      size="sm"
      _hover={{ color: "gray.700", bg: "rgba(0, 0, 0, .1)" }}
      _active={{ bg: "rgba(0, 0, 0, .2)" }}
    >
      <Text>{`Add ${isFirst ? "a" : "another"} card`}</Text>
    </Button>
  );
}

export default AddCardButton;
