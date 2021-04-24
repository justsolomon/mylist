import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import AddItemFormWrapper from "../../components/board/AddItemFormWrapper";
import AddCardButton from "../../components/board/AddCardButton";
import { useParams } from "react-router";
import { useToast } from "@chakra-ui/toast";
import errorToast from "../../utils/toast/errorToast";
import createCard from "../../redux/card/create/createCardService";

interface AddCardContainerProps {
  /** Array of todos in a list */
  cards: any[];

  /** Id of the list */
  listId: string;

  /** Boolean showing whether form is visible */
  formVisible: boolean;

  /**Function to set form visibility */
  setFormVisible: (value: boolean) => void;
}

function AddCardContainer({
  cards,
  listId,
  formVisible,
  setFormVisible,
}: AddCardContainerProps) {
  const toast = useToast();
  const { loading, error, success } = useSelector(
    (state: RootStateOrAny) => state.card
  );
  const dispatch = useDispatch();
  //@ts-ignore
  const { id } = useParams();

  useEffect(() => {
    if (error) {
      toast({
        description: error,
        ...errorToast,
      });
    }
  }, [error]);

  return (
    <Formik
      initialValues={{ title: "", description: "" }}
      onSubmit={(values) => {
        dispatch(createCard(values, listId, id));
      }}
    >
      <AddItemFormWrapper
        formVisible={formVisible}
        loading={loading}
        success={success}
        hideForm={() => setFormVisible(false)}
        card
      >
        <AddCardButton
          onClick={() => setFormVisible(true)}
          isFirst={!cards?.length}
        />
      </AddItemFormWrapper>
    </Formik>
  );
}

export default AddCardContainer;
