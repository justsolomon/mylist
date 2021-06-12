import React, { useEffect } from "react";
import { MenuItem, useDisclosure, useToast } from "@chakra-ui/react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { BoardListHeaderProps } from "../BoardListHeader";
import deleteList from "../../../../redux/list/delete/deleteListService";
import errorToast from "../../../../utils/toast/errorToast";
import ModalSkeleton from "../../../global/ModalSkeleton";

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

      <ModalSkeleton
        isOpen={isOpen}
        header={`Delete list ${title}?`}
        warning="All the cards in this list will be deleted and cannot be recovered."
        cta="Delete list"
        colorScheme="red"
        loading={loading}
        onClose={onClose}
        primaryAction={() => dispatch(deleteList(id))}
      />
    </>
  );
}

export default DeleteListModal;
