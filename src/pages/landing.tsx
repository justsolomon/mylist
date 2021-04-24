import React, { useEffect } from "react";
import { Stack } from "@chakra-ui/layout";
import HeroImage from "../components/landing/HeroImage";
import MainContent from "../components/landing/MainContent";
import useStorage from "../hooks/useStorage";
import { useHistory } from "react-router";

function LandingPage() {
  const { getStorageValue } = useStorage();
  const history = useHistory();

  useEffect(() => {
    //redirect to boards page if user is signed in
    if (getStorageValue("loggedIn")) history.push("/boards");
  });

  return (
    <Stack
      direction={["column-reverse", , "row"]}
      spacing="0"
      ml={["0", , "-20"]}
    >
      <HeroImage />
      <MainContent />
    </Stack>
  );
}

export default LandingPage;
