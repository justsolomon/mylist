import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import closePageModal from "../../../utils/ClosePageModal";
import { useHistory, useLocation } from "react-router";
import logout from "../../../utils/Logout";

function LogoutModal() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const history = useHistory();

  const closeModal = () => closePageModal(location, history, "/boards");

  return (
    <Modal isOpen onClose={closeModal} size="sm" isCentered>
      <ModalOverlay />

      <ModalContent textAlign="center" mx={["4", "0"]}>
        <ModalHeader>Log out of MyList?</ModalHeader>
        <ModalBody>You can always log back in at any time.</ModalBody>
        <ModalFooter>
          <Button onClick={closeModal} mr="4">
            Cancel
          </Button>
          <Button
            colorScheme="blue"
            onClick={() => {
              setLoading(true);
              logout();
            }}
            isLoading={loading}
          >
            Log out
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default LogoutModal;
