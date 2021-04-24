import React from "react";
import { Text } from "@chakra-ui/layout";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
import HeaderButtonWrapper from "../HeaderButtonWrapper";
import { useHistory, useLocation } from "react-router";

function SearchBoards() {
  const history = useHistory();
  const location = useLocation();

  return (
    <HeaderButtonWrapper
      icon={faClipboardList}
      onClick={() => history.push("/search", { returnPath: location.pathname })}
    >
      <Text d={["none", , "block"]}>Boards</Text>
    </HeaderButtonWrapper>
  );
}

export default SearchBoards;
