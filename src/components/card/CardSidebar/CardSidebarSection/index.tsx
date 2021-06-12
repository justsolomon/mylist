import React from "react";
import { Grid, Stack, Text, VStack } from "@chakra-ui/layout";

interface CardSidebarSectionProps {
  /** Header for section */
  header: string;

  children: React.ReactNode;
}

function CardSidebarSection({ header, children }: CardSidebarSectionProps) {
  return (
    <VStack align="flex-start" spacing="1" w="100%">
      <Text fontSize={["xs", , "13px"]} fontWeight="medium" color="gray.600">
        {header}
      </Text>
      <Grid
        w="100%"
        templateColumns={["repeat(2, 1fr)", , "repeat(1, 1fr)"]}
        gap="2"
      >
        {children}
      </Grid>
    </VStack>
  );
}

export default CardSidebarSection;
