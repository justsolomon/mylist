import React from "react";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router";
import HeaderButtonWrapper from "../HeaderButtonWrapper";

function HomeButton() {
  const history = useHistory();

  return (
    <HeaderButtonWrapper
      icon={faHome}
      onClick={() => history.push("/boards")}
    />
  );
}

export default HomeButton;
