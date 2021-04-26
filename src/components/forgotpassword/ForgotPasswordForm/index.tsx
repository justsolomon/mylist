import React from "react";
import FormInput from "../../auth/FormInput";
import { FormRequestProps } from "../../auth/formInterface";
import FormWrapper from "../../auth/FormWrapper";

function ForgotPasswordForm({ loading, success, error }: FormRequestProps) {
  return (
    <FormWrapper
      loading={loading}
      success={success}
      error={error}
      buttonText="Get reset link"
      successMessage="Email sent"
    >
      <FormInput
        id="email"
        label="Email address"
        type="email"
        name="email"
        focus
      />
    </FormWrapper>
  );
}

export default ForgotPasswordForm;
