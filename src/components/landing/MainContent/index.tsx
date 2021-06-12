import React from "react";
import { Text, VStack } from "@chakra-ui/layout";
import AuthButtons from "../AuthButtons";
import { AppIcon } from "../../global/CustomIcons";

function MainContent() {
  return (
    <VStack
      spacing="10"
      p={["8", , "0"]}
      w={["100%", , "35%"]}
      align="flex-start"
      justify="center"
    >
      <AppIcon height="50px" color="blue.500" width="50px" />
      <Text
        fontSize={["3xl", "4xl", , "5xl"]}
        lineHeight={["40px", "50px", , "60px"]}
        fontWeight="bold"
      >
        Manage tasks effectively
      </Text>
      <AuthButtons />
    </VStack>
  );
}

export default MainContent;
