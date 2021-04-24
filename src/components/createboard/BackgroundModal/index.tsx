import React from "react";
import { Modal, ModalContent, ModalOverlay } from "@chakra-ui/modal";
import { useDisclosure } from "@chakra-ui/hooks";

function BackgroundModal() {
  const { isOpen, onClose } = useDisclosure();
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent></ModalContent>
    </Modal>
  );
}

export default BackgroundModal;
