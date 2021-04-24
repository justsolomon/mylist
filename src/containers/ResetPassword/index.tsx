import React, { useEffect } from "react";
import { Formik } from "formik";
import ResetPasswordSchema from "./validationSchema";
import ResetPasswordForm from "../../components/resetpassword/ResetPasswordForm";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import resetPassword from "../../redux/auth/resetpassword/resetPasswordService";
import { useHistory, useLocation } from "react-router";

function ResetPasswordContainer() {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector(
    (state: RootStateOrAny) => state.auth
  );

  useEffect(() => {
    //redirect to login if password reset successful
    if (success) setTimeout(() => history.push("/login"), 1000);
  }, [success]);

  //get userId and token from url params
  const urlParams = new URLSearchParams(location.search);
  const userId = urlParams.get("userId");
  const token = urlParams.get("token");

  return (
    <Formik
      initialValues={{ password: "", confirmPassword: "" }}
      onSubmit={(values) => {
        dispatch(resetPassword({ ...values, token, userId }));
      }}
      validationSchema={ResetPasswordSchema}
    >
      <ResetPasswordForm loading={loading} success={success} error={error} />
    </Formik>
  );
}

export default ResetPasswordContainer;
