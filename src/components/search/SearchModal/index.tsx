import React from "react";
import { Input } from "@chakra-ui/input";
import { Modal, ModalContent, ModalOverlay } from "@chakra-ui/modal";
import { Form, useFormikContext } from "formik";
import { useHistory, useLocation } from "react-router";
import closePageModal from "../../../utils/ClosePageModal";
import { Icon, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import SearchResults from "../SearchResults";
import { initialSearchData } from "../../../redux/search/searchReducer";
import { searchSuccess } from "../../../redux/search/searchActions";
import { useDispatch } from "react-redux";

interface SearchModalProps {
  search: (query: string) => void;
}

function SearchModal({ search }: SearchModalProps) {
  const location = useLocation();
  const history = useHistory();
  const { values, setFieldValue } = useFormikContext<{ query: string }>();
  const dispatch = useDispatch();

  return (
    <Modal
      isOpen
      onClose={() => {
        closePageModal(location, history, "/boards");
        dispatch(searchSuccess(initialSearchData));
      }}
      size="xl"
    >
      <ModalOverlay />
      <ModalContent p="4">
        <Form>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Icon color="blue.500" boxSize="16px">
                <FontAwesomeIcon icon={faSearch} />
              </Icon>
            </InputLeftElement>
            <Input
              type="text"
              value={values.query}
              fontSize="md"
              placeholder="Search..."
              letterSpacing="wide"
              border="none"
              boxShadow="none"
              _focus={{ borderColor: "none" }}
              onChange={(e) => {
                const value = e.target.value;
                console.log(!value);
                if (!value) searchSuccess(initialSearchData);

                setFieldValue("query", value);
                search(value);
              }}
            />
          </InputGroup>
        </Form>
        <SearchResults />
      </ModalContent>
    </Modal>
  );
}

export default SearchModal;
