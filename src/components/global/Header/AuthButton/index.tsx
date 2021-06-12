import React from "react";
import { Button } from "@chakra-ui/button";
import { useHistory, useLocation } from "react-router";

interface IAuthButton {
  type: "Log in" | "Sign up";
}

function AuthButton({ type }: IAuthButton) {
  const history = useHistory();
  const location = useLocation();

  return (
    <Button
      borderRadius="4px"
      color="white"
      h={["30px", "35px"]}
      px={["2", "3"]}
      bg={type === "Log in" ? "hsla(0, 0%, 100%, .3)" : "green.500"}
      _hover={
        type === "Log in"
          ? { bg: "hsla(0, 0%, 100%, .2)" }
          : { bg: "green.600" }
      }
      _active={
        type === "Log in"
          ? { bg: "hsla(0, 0%, 100%, .1)" }
          : { bg: "green.700" }
      }
      onClick={() =>
        history.push(type === "Log in" ? "/login" : "/signup", {
          returnPath: location.pathname,
        })
      }
    >
      {type}
    </Button>
  );
}

export default AuthButton;
