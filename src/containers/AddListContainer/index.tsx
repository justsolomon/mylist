import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import createList from "../../redux/list/create/createListService";
import AddItemFormWrapper from "../../components/board/AddItemFormWrapper";
import AddListButton from "../../components/board/AddListButton";
import { useParams } from "react-router";
import { useToast } from "@chakra-ui/toast";
import errorToast from "../../utils/toast/errorToast";

function AddListContainer() {
  const [formVisible, setFormVisible] = useState(false);
  const toast = useToast();
  const { loading, error, success } = useSelector(
    (state: RootStateOrAny) => state.list
  );
  const { data } = useSelector((state: RootStateOrAny) => state.board.index);
  const dispatch = useDispatch();
  //@ts-ignore
  const { id } = useParams();

  useEffect(() => {
    // if (success) setFormVisible(false);
    if (error) {
      toast({
        description: error,
        ...errorToast,
      });
    }
  }, [error]);

  return (
    <Formik
      initialValues={{ title: "" }}
      onSubmit={(values) => {
        dispatch(createList(values, id));
      }}
    >
      <AddItemFormWrapper
        formVisible={formVisible}
        loading={loading}
        success={success}
        hideForm={() => setFormVisible(false)}
      >
        <AddListButton
          onClick={() => setFormVisible(true)}
          isFirst={!data.lists?.length}
        />
      </AddItemFormWrapper>
    </Formik>
  );
}

export default AddListContainer;
