import { Input } from "@chakra-ui/input";
import { Modal, ModalContent, ModalOverlay } from "@chakra-ui/modal";
import React from "react";
import { useHistory, useLocation } from "react-router";
import closePageModal from "../../../utils/ClosePageModal";

function SearchModal() {
  const location = useLocation();
  const history = useHistory();

  return (
    <Modal isOpen onClose={() => closePageModal(location, history, "/boards")}>
      <ModalOverlay />
      <ModalContent>
        <Input />
      </ModalContent>
    </Modal>
  );
}

export default SearchModal;
