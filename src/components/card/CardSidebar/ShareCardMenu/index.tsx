import React, { useEffect, useState } from "react";
import { faLink, faShare, faShareAlt } from "@fortawesome/free-solid-svg-icons";
import SidebarButtonWrapper from "../SidebarButtonWrapper";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import Icon from "@chakra-ui/icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Text } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import successToast from "../../../../utils/toast/successToast";
import { useClipboard } from "@chakra-ui/hooks";

const sharePost = (url: string) => {
  navigator
    .share({
      url,
    })
    .then(() => console.log("Successful share"))
    .catch((error: string) => console.log("Error sharing", error));
};

function ShareCardMenu() {
  const [location, setLocation] = useState("");
  const { onCopy, hasCopied } = useClipboard(location);
  const toast = useToast();

  useEffect(() => {
    //set location once component mounts and window can be accessed
    setLocation(window.location.href);
  }, []);

  useEffect(() => {
    if (hasCopied) {
      toast({
        ...successToast,
        description: "Copied successfully",
      });
    }
  }, [hasCopied]);

  return (
    <>
      <Menu autoSelect={false}>
        <MenuButton as={Box} role="group" cursor="pointer">
          <SidebarButtonWrapper text="Share" icon={faShareAlt} />
        </MenuButton>
        <MenuList borderRadius="4px" py="1" minW="175px" fontSize="sm">
          <MenuItem
            onClick={(e) => {
              e.stopPropagation();
              onCopy();
            }}
          >
            <Icon boxSize="14px" color="gray.500" mr="2">
              <FontAwesomeIcon icon={faLink} />
            </Icon>
            <Text>Copy link to card</Text>
          </MenuItem>
          {navigator.share && (
            <MenuItem
              onClick={(e) => {
                e.stopPropagation();
                sharePost(location);
              }}
            >
              <Icon boxSize="14px" color="gray.500" mr="2">
                <FontAwesomeIcon icon={faShare} />
              </Icon>
              <Text>Share card via...</Text>
            </MenuItem>
          )}
        </MenuList>
      </Menu>
    </>
  );
}

export default ShareCardMenu;
