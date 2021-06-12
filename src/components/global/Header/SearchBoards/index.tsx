import React, { useEffect, useState } from "react";
import { HStack, Text, VStack } from "@chakra-ui/layout";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
import HeaderButtonWrapper from "../HeaderButtonWrapper";
import { useDisclosure } from "@chakra-ui/hooks";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import SearchBoardSection from "./SearchBoardSection";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faProductHunt } from "@fortawesome/free-brands-svg-icons";
import SearchBoardResults from "./SearchBoardResults";
import SearchBoardInput from "./SearchBoardInput";
import { CloseButton } from "@chakra-ui/close-button";
import { useLocation } from "react-router";
import getUser from "../../../../redux/user/get/getUserService";

function SearchBoards() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { data } = useSelector((state: RootStateOrAny) => state.user);
  const [searchResults, setSearchResults] = useState(null);
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    //only fetch user if data isn't available in state
    if (!data.boards) dispatch(getUser());
  }, [data]);

  useEffect(() => {
    //close modal when user navigates elsewhere
    onClose();
  }, [location.pathname]);

  return (
    <>
      <HeaderButtonWrapper icon={faClipboardList} onClick={onOpen}>
        <Text d={["none", , "block"]}>Boards</Text>
      </HeaderButtonWrapper>
      <Modal
        isOpen={isOpen}
        size="xs"
        onClose={onClose}
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent borderRadius="4px" position="fixed" left="4">
          <ModalHeader p="3" pb="2">
            <HStack>
              <SearchBoardInput
                updateSearchResults={setSearchResults}
                boards={data.boards}
              />
              <CloseButton onClick={onClose} />
            </HStack>
          </ModalHeader>
          <ModalBody px="3">
            {searchResults !== null ? (
              searchResults.length ? (
                <SearchBoardResults boards={searchResults} />
              ) : (
                <Text align="center">No boards found</Text>
              )
            ) : (
              <VStack spacing="3">
                <SearchBoardSection
                  name="STARRED BOARDS"
                  icon={faStar}
                  boards={data.boards?.filter((board: any) => board.starred)}
                />
                <SearchBoardSection
                  name="PERSONAL BOARDS"
                  icon={faProductHunt}
                  boards={data.boards?.filter((board: any) => !board.starred)}
                />
              </VStack>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default SearchBoards;
