import React from "react";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import SidebarButtonWrapper from "../SidebarButtonWrapper";

function DeleteCardButton() {
  return (
    <SidebarButtonWrapper
      text="Delete card"
      icon={faTrashAlt}
      onClick={() => console.log("deleting card")}
    />
  );
}

export default DeleteCardButton;
