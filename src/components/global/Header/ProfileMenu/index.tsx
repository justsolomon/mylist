import React from "react";
import { HStack, Text, VStack } from "@chakra-ui/layout";
import { Menu, MenuButton, MenuDivider, MenuList } from "@chakra-ui/menu";
import { useHistory, useLocation } from "react-router";
import useStorage from "../../../../hooks/useStorage";
import ProfileIcon from "./ProfileIcon";
import ProfileMenuItem from "./ProfileMenuItem";
import { faSignOutAlt, faUser } from "@fortawesome/free-solid-svg-icons";

function ProfileMenu() {
  const { getStorageValue } = useStorage();
  const history = useHistory();
  const location = useLocation();

  const user = getStorageValue("userData");
  return (
    <Menu>
      <MenuButton>
        <ProfileIcon imgSrc={user?.imageUrl} />
      </MenuButton>
      <MenuList>
        <HStack ml="2" py="2">
          <ProfileIcon imgSrc={user?.imageUrl} inMenu />
          <VStack align="flex-start" spacing="0" fontSize="sm">
            <Text>{user?.fullName}</Text>
            <Text color="gray.500">@{user?.username}</Text>
          </VStack>
        </HStack>
        <MenuDivider />
        {/* <ProfileMenuItem
          cta="View Profile"
          icon={faUser}
          onClick={() => history.push("/logout")}
        /> */}
        <ProfileMenuItem
          onClick={() =>
            history.push("/logout", { returnPath: location.pathname })
          }
          cta="Logout"
          icon={faSignOutAlt}
        />
      </MenuList>
    </Menu>
  );
}

export default ProfileMenu;
