import React from "react";
import { VStack } from "@chakra-ui/layout";
import CardSidebarSection from "./CardSidebarSection";
import AddMemberButton from "./AddMemberButton";
import MoveCardButton from "./MoveCardButton";
import ShareCardButton from "./ShareCardButton";
import DeleteCardButton from "./DeleteCardButton";

function CardSidebar() {
  return (
    <VStack align="flex-start" w="20%" mt="10">
      <CardSidebarSection header="ADD TO CARD">
        <AddMemberButton />
      </CardSidebarSection>
      <CardSidebarSection header="ACTIONS">
        <MoveCardButton />
        <ShareCardButton />
        <DeleteCardButton />
      </CardSidebarSection>
    </VStack>
  );
}

export default CardSidebar;
