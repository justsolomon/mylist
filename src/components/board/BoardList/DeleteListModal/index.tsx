import React, { useEffect } from "react";
import {
  Button,
  MenuItem,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { BoardListHeaderProps } from "../BoardListHeader";
import deleteList from "../../../../redux/list/delete/deleteListService";
import errorToast from "../../../../utils/toast/errorToast";

function DeleteListModal({ title, id }: BoardListHeaderProps) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const toast = useToast();
  const { loading, success, error } = useSelector(
    (state: RootStateOrAny) => state.list
  );
  const dispatch = useDispatch();

  useEffect(() => {
    //close modal on success
    if (success) onClose();

    if (error) {
      toast({
        description: error,
        ...errorToast,
      });
    }
  }, [success, error]);

  return (
    <>
      <MenuItem onClick={onOpen}>Delete list</MenuItem>

      <Modal isOpen={isOpen} onClose={onClose} size="sm" isCentered>
        <ModalOverlay />
        <ModalContent textAlign="center" mx={["4", "0"]}>
          <ModalHeader>{`Delete list ${title}?`}</ModalHeader>
          <ModalBody>
            All the cards in this list will be deleted and cannot be recovered.
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} mr="4">
              Cancel
            </Button>
            <Button
              colorScheme="red"
              onClick={() => dispatch(deleteList(id))}
              isLoading={loading}
            >
              Delete list
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default DeleteListModal;
