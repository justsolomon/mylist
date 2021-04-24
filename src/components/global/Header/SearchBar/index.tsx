import React from "react";
import { Box, Text } from "@chakra-ui/layout";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useHistory, useLocation } from "react-router";
import HeaderButtonWrapper from "../HeaderButtonWrapper";

function SearchBar() {
  const history = useHistory();
  const location = useLocation();

  return (
    <HeaderButtonWrapper
      icon={faSearch}
      reverse
      onClick={() => history.push("/search", { returnPath: location.pathname })}
    >
      <Box d={["none", , "block"]} width="150px" textAlign="left">
        <Text fontWeight="medium">Search...</Text>
      </Box>
    </HeaderButtonWrapper>
  );
}

export default React.memo(SearchBar);
