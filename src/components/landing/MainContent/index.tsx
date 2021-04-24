import { Text, VStack } from "@chakra-ui/layout";
import React from "react";
import AppIcon from "../../global/AppIcon";
import AuthButtons from "../AuthButtons";

function MainContent() {
  return (
    <VStack
      spacing="10"
      p={["8", , "0"]}
      w={["100%", , "35%"]}
      align="flex-start"
      justify="center"
    >
      <AppIcon height="50px" width="45px" />
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
