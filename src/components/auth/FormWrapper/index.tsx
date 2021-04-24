import React from "react";
import { VStack } from "@chakra-ui/layout";
import { Form } from "formik";
import { FormRequestProps } from "../formInterface";
import Alert from "../Alert";
import SubmitButton from "../SubmitButton";

interface FormWrapperProps extends FormRequestProps {
  children: React.ReactNode;

  /** CTA for the submit button */
  buttonText: string;

  /** Success message if request succeeds */
  successMessage: string;
}

function FormWrapper({
  children,
  success,
  error,
  loading,
  buttonText,
  successMessage,
}: FormWrapperProps) {
  return (
    <VStack as={Form} spacing="4" align="flex-end">
      {success && (
        <Alert message={`${successMessage} successfully`} status="success" />
      )}
      {error && <Alert message={error} status="error" />}
      {children}
      <SubmitButton text={buttonText} loading={loading} />
    </VStack>
  );
}

export default FormWrapper;
