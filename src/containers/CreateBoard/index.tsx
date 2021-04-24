import React, { useEffect } from "react";
import { Formik } from "formik";
import CreateBoardModal from "../../components/createboard/CreateBoardModal";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import getBoardImages from "../../redux/board/getImages/getImagesService";
import createBoard from "../../redux/board/create/createBoardService";
import { useToast } from "@chakra-ui/toast";
import successToast from "../../utils/toast/successToast";
import errorToast from "../../utils/toast/errorToast";
import { useHistory } from "react-router";

function CreateBoardContainer() {
  const toast = useToast();
  const dispatch = useDispatch();
  const { create, index } = useSelector((state: RootStateOrAny) => state.board);
  const history = useHistory();

  const { images } = index;
  const { loading, success, error, id } = create;

  useEffect(() => {
    if (!images.length) dispatch(getBoardImages());
  }, [images]);

  useEffect(() => {
    if (success) {
      toast({
        title: "Board created successfully!",
        ...successToast,
      });

      setTimeout(() => history.push(`/board/${id}`), 1000);
    }
    if (error) {
      toast({
        description: error,
        ...errorToast,
      });
    }
  }, [success, error]);

  return (
    <Formik
      initialValues={{ title: "", private: true, background: "#0079BF" }}
      onSubmit={(values) => {
        dispatch(createBoard(values));
      }}
    >
      <CreateBoardModal loading={loading} />
    </Formik>
  );
}

export default CreateBoardContainer;
