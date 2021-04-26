import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import SidebarButtonWrapper from "../SidebarButtonWrapper";

function MoveCardButton() {
  return (
    <SidebarButtonWrapper
      text="Move"
      icon={faArrowRight}
      onClick={() => console.log("moving card")}
    />
  );
}

export default MoveCardButton;
