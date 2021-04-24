import React from "react";
import { Text } from "@chakra-ui/layout";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import HeaderButtonWrapper from "../HeaderButtonWrapper";
import { useHistory, useLocation } from "react-router";

function AddBoard() {
  const history = useHistory();
  const location = useLocation();

  return (
    <HeaderButtonWrapper
      onClick={() => history.push("/create", { returnPath: location.pathname })}
      icon={faPlus}
    >
      <Text d={["none", , "block"]}>New Board</Text>
    </HeaderButtonWrapper>
  );
}

export default AddBoard;
