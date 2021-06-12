import React, { useEffect } from "react";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import SidebarButtonWrapper from "../SidebarButtonWrapper";
import { useDisclosure } from "@chakra-ui/hooks";
import ModalSkeleton from "../../../global/ModalSkeleton";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import deleteCard from "../../../../redux/card/delete/deleteCardService";
import { useToast } from "@chakra-ui/toast";
import errorToast from "../../../../utils/toast/errorToast";
import { useHistory } from "react-router";

function DeleteCardModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const toast = useToast();
  const history = useHistory();
  const {
    data,
    deleteLoading: loading,
    error,
    deleteSuccess: success,
  } = useSelector((state: RootStateOrAny) => state.card);

  useEffect(() => {
    //close modal on success
    if (success) history.push(`/board/${data.boardId}`);

    if (error) {
      toast({
        description: error,
        ...errorToast,
      });
    }
  }, [success, error]);

  return (
    <>
      <SidebarButtonWrapper
        text="Delete card"
        icon={faTrashAlt}
        deleteButton
        onClick={onOpen}
      />
      <ModalSkeleton
        isOpen={isOpen}
        header={`Delete card?`}
        warning="Once this card is deleted, it cannot be recovered."
        cta="Delete card"
        colorScheme="red"
        loading={loading}
        onClose={onClose}
        primaryAction={() => dispatch(deleteCard(data._id))}
      />
    </>
  );
}

export default DeleteCardModal;
