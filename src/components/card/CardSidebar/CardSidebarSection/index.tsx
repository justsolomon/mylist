import React from "react";
import { Text, VStack } from "@chakra-ui/layout";

interface CardSidebarSectionProps {
  /** Header for section */
  header: string;

  children: React.ReactNode;
}

function CardSidebarSection({ header, children }: CardSidebarSectionProps) {
  return (
    <VStack align="flex-start">
      <Text>{header}</Text>
      {children}
    </VStack>
  );
}

export default CardSidebarSection;
