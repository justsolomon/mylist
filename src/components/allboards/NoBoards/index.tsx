import React from "react";
import { Button } from "@chakra-ui/button";
import { Center, Text, VStack } from "@chakra-ui/layout";
import { useHistory } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function NoBoards() {
  const history = useHistory();

  return (
    <VStack as={Center} w={["100%", , "75%"]}>
      <Text>You have no boards yet</Text>
      <Button
        colorScheme="blue"
        rounded="full"
        onClick={() => history.push("/create")}
        leftIcon={<FontAwesomeIcon icon={faPlus} />}
      >
        Add new board
      </Button>
    </VStack>
  );
}

export default NoBoards;
