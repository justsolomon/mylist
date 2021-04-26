import React from "react";
import { FormRequestProps } from "../../auth/formInterface";
import FormWrapper from "../../auth/FormWrapper";
import PasswordLayout from "../../auth/PasswordLayout";

function ResetPasswordForm({ loading, success, error }: FormRequestProps) {
  return (
    <FormWrapper
      loading={loading}
      success={success}
      error={error}
      buttonText="Reset password"
      successMessage="Password has been reset"
    >
      <PasswordLayout id="password" label="Password" name="password" focus />
      <PasswordLayout
        id="confirmPassword"
        label="Confirm Password"
        name="confirmPassword"
      />
    </FormWrapper>
  );
}

export default ResetPasswordForm;
