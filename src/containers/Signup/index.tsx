import React, { useEffect } from "react";
import { Formik } from "formik";
import SignupSchema from "./signupValidation";
import SignupForm from "../../components/signup/SignupForm";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import signupUser from "../../redux/auth/signup/signupService";
import useStorage from "../../hooks/useStorage";
import { useHistory, useLocation } from "react-router";

function SignupContainer() {
  const dispatch = useDispatch();
  const { updateAuthStatus } = useStorage();
  const history = useHistory();
  const location = useLocation();
  const { loading, success, error, data } = useSelector(
    (state: RootStateOrAny) => state.auth
  );

  useEffect(() => {
    if (success) {
      updateAuthStatus(true, data);

      //redirect to boards page or return path if specified
      let redirectUrl = "/boards";
      //@ts-ignore
      if (location.state) redirectUrl = location.state.returnPath;
      setTimeout(() => history.push(redirectUrl), 1000);
    }
  }, [success]);

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        username: "",
        confirmPassword: "",
      }}
      onSubmit={(values) => {
        dispatch(signupUser(values));
      }}
      validationSchema={SignupSchema}
    >
      <SignupForm loading={loading} success={success} error={error} />
    </Formik>
  );
}

export default SignupContainer;
