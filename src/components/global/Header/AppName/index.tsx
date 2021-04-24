import React from "react";
import { HStack, Text } from "@chakra-ui/layout";
import { Link } from "react-router-dom";
import { AppIcon } from "../../CustomIcons";

function AppName() {
  return (
    <HStack
      as={Link}
      align="center"
      color="gray.300"
      to="/"
      spacing="1"
      _hover={{ color: "gray.100" }}
    >
      <AppIcon height="25px" width="25px" />
      <Text fontWeight="bold" fontSize="lg">
        MyList
      </Text>
    </HStack>
  );
}

export default React.memo(AppName);
