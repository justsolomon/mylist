import React from "react";
import { Button } from "@chakra-ui/button";

interface ISendInvitation {
  disabled: boolean;
  loading: boolean;
  onClick: () => void;
}

function SendInvitationButton({ disabled, loading, onClick }: ISendInvitation) {
  return (
    <Button
      isDisabled={disabled}
      isLoading={loading}
      colorScheme="blue"
      onClick={onClick}
      borderRadius="4px"
    >
      Send invitation
    </Button>
  );
}

export default SendInvitationButton;
