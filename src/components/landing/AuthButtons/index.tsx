import React from "react";
import { Button } from "@chakra-ui/button";
import { Stack } from "@chakra-ui/layout";
import { useHistory, useLocation } from "react-router";

function AuthButtons() {
  const history = useHistory();
  const location = useLocation();

  const goToPage = (path: string) =>
    history.push(`/${path}`, { returnPath: location.pathname });

  return (
    <Stack
      direction={["column", "row", "column"]}
      spacing="4"
      w={["100%", , "75%"]}
    >
      <Button
        isFullWidth
        h="50px"
        rounded="full"
        colorScheme="blue"
        onClick={() => goToPage("signup")}
      >
        Sign Up
      </Button>
      <Button
        isFullWidth
        h="50px"
        rounded="full"
        variant="outline"
        colorScheme="blue"
        onClick={() => goToPage("login")}
      >
        Log in
      </Button>
    </Stack>
  );
}

export default AuthButtons;
