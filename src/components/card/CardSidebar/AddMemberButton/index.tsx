import React from "react";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import SidebarButtonWrapper from "../SidebarButtonWrapper";

function AddMemberButton() {
  return (
    <SidebarButtonWrapper
      text="Add members"
      icon={faUser}
      onClick={() => console.log("add member")}
    />
  );
}

export default AddMemberButton;
