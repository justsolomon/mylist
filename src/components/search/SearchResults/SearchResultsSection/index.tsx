import React from "react";
import { Text, VStack } from "@chakra-ui/react";

interface ResultsSectionProps {
  header: string;
  content: React.ReactNode;
}

function SearchResultsSection({ header, content }: ResultsSectionProps) {
  return (
    <VStack w="100%" align="flex-start" spacing="1">
      <Text color="gray.500" letterSpacing="wide" fontSize="13px">
        {header}
      </Text>
      {content}
    </VStack>
  );
}

export default SearchResultsSection;
