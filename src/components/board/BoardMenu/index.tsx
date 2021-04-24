import React from "react";
import { Divider, Text } from "@chakra-ui/layout";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import BoardHeaderButton from "../BoardHeaderButton";
import { useDisclosure } from "@chakra-ui/hooks";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/modal";

function BoardMenu() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <BoardHeaderButton icon={faEllipsisH} onClick={onOpen}>
        <Text>Show menu</Text>
      </BoardHeaderButton>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent mt="50px">
          <DrawerCloseButton rounded="full" />
          <DrawerHeader py="3" align="center" color="gray.700" fontSize="lg">
            Menu
          </DrawerHeader>
          <Divider />
          <DrawerBody>Menu content here</DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default BoardMenu;
