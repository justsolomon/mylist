import React, { useEffect } from "react";
import { Formik } from "formik";
import ForgotPasswordSchema from "./validationSchema";
import ForgotPasswordForm from "../../components/forgotpassword/ForgotPasswordForm";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import forgotPassword from "../../redux/auth/forgotpassword/forgotPasswordService";

function ForgotPasswordContainer() {
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector(
    (state: RootStateOrAny) => state.auth
  );

  return (
    <Formik
      initialValues={{ email: "" }}
      onSubmit={(values) => {
        dispatch(forgotPassword(values));
      }}
      validationSchema={ForgotPasswordSchema}
    >
      <ForgotPasswordForm loading={loading} success={success} error={error} />
    </Formik>
  );
}

export default ForgotPasswordContainer;
