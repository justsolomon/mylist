import React from "react";
import { Button } from "@chakra-ui/button";
import { Text, VStack } from "@chakra-ui/layout";
import { faRedo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NetworkErrorIcon } from "../CustomIcons";

interface NetworkErrorProps {
  /** Function to run to retry request */
  retryRequest: React.MouseEventHandler;
}

function NetworkError({ retryRequest }: NetworkErrorProps) {
  return (
    <VStack w={["100%", , "75%"]} spacing="3">
      <NetworkErrorIcon boxSize="30px" color="gray.500" />
      <Text align="center">
        Looks like you lost your connection. Please check it and try again.
      </Text>
      <Button
        leftIcon={<FontAwesomeIcon icon={faRedo} />}
        colorScheme="blue"
        borderRadius="full"
        onClick={retryRequest}
      >
        Try again
      </Button>
    </VStack>
  );
}

export default NetworkError;
