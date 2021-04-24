import React from "react";
import { HStack } from "@chakra-ui/layout";
import HomeButton from "./HomeButton";
import SearchBoards from "./SearchBoards";
import SearchBar from "./SearchBar";
import AddBoard from "./AddBoard";
import AppName from "./AppName";
import ProfileMenu from "./ProfileMenu";

interface HeaderProps {
  /**Boolean showing whether the current page has a background */
  hasBackground: boolean;
}

function Header({ hasBackground }: HeaderProps) {
  return (
    <HStack
      justify="space-between"
      bg={hasBackground ? "rgb(0, 0, 0, .5)" : "blue.600"}
      h="50px"
      px="4"
    >
      <HStack w="75%">
        <HStack w={["55%", "60%"]}>
          <HomeButton />
          <SearchBoards />
          <SearchBar />
        </HStack>
        <AppName />
      </HStack>
      <HStack>
        <AddBoard />
        <ProfileMenu />
      </HStack>
    </HStack>
  );
}

export default React.memo(Header);
