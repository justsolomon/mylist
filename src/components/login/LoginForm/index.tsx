import React from "react";
import FormInput from "../../auth/FormInput";
import PasswordLayout from "../../auth/PasswordLayout";
import FormWrapper from "../../auth/FormWrapper";
import { FormRequestProps } from "../../auth/formInterface";

function LoginForm({ loading, success, error }: FormRequestProps) {
  return (
    <FormWrapper
      loading={loading}
      success={success}
      error={error}
      successMessage="Logged in"
      buttonText="Log in"
    >
      <FormInput
        id="email"
        label="Email address"
        type="email"
        name="email"
        focus
      />
      <PasswordLayout
        id="password"
        label="Password"
        name="password"
        forgotPassword
      />
    </FormWrapper>
  );
}

export default LoginForm;
