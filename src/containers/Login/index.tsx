import React, { useEffect } from "react";
import { Formik } from "formik";
import LoginSchema from "./loginValidation";
import LoginForm from "../../components/login/LoginForm";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import loginUser from "../../redux/auth/login/loginService";
import useStorage from "../../hooks/useStorage";
import { useHistory, useLocation } from "react-router";

function LoginContainer() {
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
      initialValues={{ email: "", password: "" }}
      onSubmit={(values) => {
        dispatch(loginUser(values));
      }}
      validationSchema={LoginSchema}
    >
      <LoginForm loading={loading} success={success} error={error} />
    </Formik>
  );
}

export default LoginContainer;
