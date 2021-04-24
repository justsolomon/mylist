import React from "react";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/modal";
import { useHistory } from "react-router";
import { useBreakpointValue } from "@chakra-ui/media-query";
import CardTitle from "../CardTitle";
import CardHeader from "../CardHeader";
import { Spinner } from "@chakra-ui/spinner";
import { Center } from "@chakra-ui/layout";

interface CardModalProps {
  /** Loading status of the card */
  loading: boolean;

  /** Data contained in a card */
  card: any;

  /** Function for updating a card's value */
  updateCardValue: (key: string, value: string) => void;
}

function CardModal({ loading, card, updateCardValue }: CardModalProps) {
  const history = useHistory();
  const size = useBreakpointValue(["xs", "md", "lg", "2xl"]);

  return (
    <Modal
      isOpen
      size={size}
      onClose={() => history.push(`/board/${card.boardId}`)}
    >
      <ModalOverlay />

      <ModalContent h="80vh" bg="#EBECF0">
        {loading ? (
          <Center w="100%" h="100%">
            <Spinner
              thickness="4px"
              emptyColor="gray.300"
              color="blue.900"
              size="xl"
            />
          </Center>
        ) : (
          <>
            <ModalCloseButton rounded="full" />
            <ModalBody mt="4">
              <CardHeader listTitle={card.list?.title}>
                <CardTitle
                  title={card.title}
                  updateTitleValue={(value: string) =>
                    updateCardValue("title", value)
                  }
                />
              </CardHeader>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

export default CardModal;
