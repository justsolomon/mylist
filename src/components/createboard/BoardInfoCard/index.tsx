import React from "react";
import { Box, HStack, VStack } from "@chakra-ui/layout";
import BoardTitleInput from "../BoardTitleInput";
import BoardVisibilitySelect from "../BoardVisibilitySelect";
import { CloseButton } from "@chakra-ui/close-button";
import { useFormikContext } from "formik";

interface BoardInfoProps {
  /** Onclick event for closing modal */
  closeModal: React.MouseEventHandler;
}

function BoardInfoCard({ closeModal }: BoardInfoProps) {
  const { values }: any = useFormikContext();

  return (
    <Box bg={values.background} bgSize="cover" w="75%" borderRadius="sm">
      <VStack
        bgColor="rgba(0, 0, 0, .25)"
        px="2"
        py="4"
        align="flex-start"
        borderRadius="sm"
      >
        <HStack align="flex-start" justify="space-between">
          <BoardTitleInput />
          <CloseButton
            color="#fff"
            size="sm"
            borderRadius="sm"
            _hover={{ bg: "none", color: "gray.300" }}
            onClick={closeModal}
          />
        </HStack>
        <BoardVisibilitySelect />
      </VStack>
    </Box>
  );
}

export default BoardInfoCard;
