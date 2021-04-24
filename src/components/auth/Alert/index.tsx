import React from "react";
import { Alert as ChakraAlert, AlertIcon } from "@chakra-ui/react";
import { AlertProps } from "../alertInterface";

function Alert({ message, status }: AlertProps) {
  return (
    <ChakraAlert status={status} borderRadius="base">
      <AlertIcon />
      {message}
    </ChakraAlert>
  );
}

export default Alert;
