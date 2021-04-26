import React from "react";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import SidebarButtonWrapper from "../SidebarButtonWrapper";

function ShareCardButton() {
  return (
    <SidebarButtonWrapper
      text="Share"
      icon={faShareAlt}
      onClick={() => console.log("sharing card")}
    />
  );
}

export default ShareCardButton;
