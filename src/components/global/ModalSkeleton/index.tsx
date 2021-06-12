import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { Button } from "@chakra-ui/button";

interface ModalSkeletonProps {
  /** If `true`, the modal will be open */
  isOpen: boolean;

  /** Header of the modal */
  header: string;

  /** Warning for action taken when primary button is clicked */
  warning: string;

  /** If `true`, the submit button's loading state will be active */
  loading: boolean;

  /** Color scheme for the primary action button */
  colorScheme: string;

  /** Call to action text for primary button */
  cta: string;

  /** Callback to close the modal */
  onClose: () => void;

  /** Callback to execute primary action of the modal */
  primaryAction: () => void;
}

function ModalSkeleton({
  isOpen,
  header,
  colorScheme,
  loading,
  warning,
  cta,
  onClose,
  primaryAction,
}: ModalSkeletonProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="sm" isCentered>
      <ModalOverlay />
      <ModalContent textAlign="center" mx={["4", "0"]}>
        <ModalHeader>{header}</ModalHeader>
        <ModalBody>{warning}</ModalBody>
        <ModalFooter>
          <Button onClick={onClose} mr="4">
            Cancel
          </Button>
          <Button
            colorScheme={colorScheme}
            onClick={primaryAction}
            isLoading={loading}
          >
            {cta}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ModalSkeleton;
