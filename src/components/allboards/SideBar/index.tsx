import React from "react";
import { VStack } from "@chakra-ui/layout";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router";
import SidebarCard from "./SidebarCard";

function SideBar() {
  const location = useLocation();

  return (
    <VStack w="25%" display={["none", , "flex"]}>
      <SidebarCard
        name="Boards"
        icon={faClipboardList}
        active={location.pathname === "/boards"}
      />
    </VStack>
  );
}

export default SideBar;
