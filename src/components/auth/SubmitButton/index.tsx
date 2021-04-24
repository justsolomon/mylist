import React from "react";
import { Button } from "@chakra-ui/button";

interface SubmitButtonProps {
  /** Call to action text for button */
  text: string;

  /** Loading state of the button */
  loading: boolean;

  /** Disabled state of the button */
  disabled?: boolean;
}

function SubmitButton({ text, loading, disabled }: SubmitButtonProps) {
  return (
    <Button
      colorScheme="blue"
      type="submit"
      isLoading={loading}
      isDisabled={disabled}
    >
      {text}
    </Button>
  );
}

export default SubmitButton;
