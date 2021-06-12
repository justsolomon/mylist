import React from "react";
import { HStack } from "@chakra-ui/layout";
import HomeButton from "./HomeButton";
import SearchBoards from "./SearchBoards";
import SearchBar from "./SearchBar";
import AddBoard from "./AddBoard";
import AppName from "./AppName";
import ProfileMenu from "./ProfileMenu";
import useStorage from "../../../hooks/useStorage";
import AuthButton from "./AuthButton";

interface HeaderProps {
  /**Boolean showing whether the current page has a background */
  hasBackground: boolean;
}

function Header({ hasBackground }: HeaderProps) {
  const { getStorageValue } = useStorage();

  const isLoggedIn = getStorageValue("loggedIn");

  return (
    <HStack
      justify="space-between"
      bg={hasBackground ? "rgb(0, 0, 0, .5)" : "blue.600"}
      h="50px"
      position="sticky"
      top="0"
      zIndex="1"
      px={["2", "4"]}
    >
      <HStack w="75%">
        <HStack w={["55%", "60%"]} d={!isLoggedIn && ["none", "flex"]}>
          <HomeButton />
          {isLoggedIn ? (
            <>
              <SearchBoards />
              <SearchBar />
            </>
          ) : null}
        </HStack>
        <AppName />
      </HStack>
      <HStack>
        {isLoggedIn ? (
          <>
            <AddBoard />
            <ProfileMenu />
          </>
        ) : (
          <>
            <AuthButton type="Sign up" />
            <AuthButton type="Log in" />
          </>
        )}
      </HStack>
    </HStack>
  );
}

export default React.memo(Header);
