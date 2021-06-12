import React from "react";
import { Box, VStack } from "@chakra-ui/layout";
import CardSidebarSection from "./CardSidebarSection";
import AddMemberButton from "./AddMemberButton";
import MoveCardButton from "./MoveCardButton";
import ShareCardMenu from "./ShareCardMenu";
import DeleteCardModal from "./DeleteCardModal";

function CardSidebar() {
  return (
    <Box position="relative" w={["100%", , "20%"]}>
      <VStack
        align="flex-start"
        position="absolute"
        spacing="3"
        w="100%"
        top={["4", , "16"]}
      >
        <CardSidebarSection header="ADD TO CARD">
          <AddMemberButton />
        </CardSidebarSection>
        <CardSidebarSection header="ACTIONS">
          <MoveCardButton />
          <ShareCardMenu />
          <DeleteCardModal />
        </CardSidebarSection>
      </VStack>
    </Box>
  );
}

export default CardSidebar;
