import React from "react";
import { Stack } from "@chakra-ui/layout";
import FormInput from "../../auth/FormInput";
import FormWrapper from "../../auth/FormWrapper";
import PasswordLayout from "../../auth/PasswordLayout";
import { FormRequestProps } from "../../auth/formInterface";

function SignupForm({ loading, success, error }: FormRequestProps) {
  return (
    <FormWrapper
      loading={loading}
      success={success}
      error={error}
      buttonText="Sign up"
      successMessage="Account created"
    >
      <Stack
        direction={["column", , "row"]}
        align="flex-start"
        w="100%"
        spacing="4"
      >
        <FormInput
          id="firstName"
          label="First Name"
          type="text"
          name="firstName"
          focus
        />
        <FormInput
          id="lastName"
          label="Last Name"
          type="text"
          name="lastName"
        />
      </Stack>
      <FormInput id="username" label="Username" type="text" name="username" />
      <FormInput id="email" label="Email address" type="email" name="email" />
      <PasswordLayout id="password" label="Password" name="password" />
      <PasswordLayout
        id="confirmPassword"
        label="Confirm Password"
        name="confirmPassword"
      />
    </FormWrapper>
  );
}

export default SignupForm;
