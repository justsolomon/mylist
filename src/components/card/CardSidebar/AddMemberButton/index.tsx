import React from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import SidebarButtonWrapper from "../SidebarButtonWrapper";

function AddMemberButton() {
  return (
    <SidebarButtonWrapper
      text="Members"
      icon={faUser}
      onClick={() => console.log("add member")}
    />
  );
}

export default AddMemberButton;
