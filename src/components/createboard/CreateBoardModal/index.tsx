import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  HStack,
  Box,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useHistory, useLocation } from "react-router";
import closePageModal from "../../../utils/ClosePageModal";
import BoardInfoCard from "../BoardInfoCard";
import SubmitButton from "../../auth/SubmitButton";
import BGInputList from "../BGInputList";
import { Form, useFormikContext } from "formik";

interface BoardModalProps {
  /** Loading state of the request */
  loading: boolean;
}

function CreateBoardModal({ loading }: BoardModalProps) {
  const history = useHistory();
  const location = useLocation();
  const { values }: any = useFormikContext();
  const size = useBreakpointValue(["xs", "sm"]);

  const closeModal = () => closePageModal(location, history, "/boards");

  return (
    <Modal isOpen size={size} onClose={closeModal} scrollBehavior="inside">
      <ModalOverlay />
      <ModalContent bg="transparent" boxShadow="none">
        <Form>
          <HStack>
            <BoardInfoCard closeModal={closeModal} />
            <BGInputList />
          </HStack>
          <Box w="45%" mt="2">
            <SubmitButton
              text="Create board"
              loading={values.title.length > 0 && loading}
              disabled={!values.title.length}
            />
          </Box>
        </Form>
      </ModalContent>
    </Modal>
  );
}

export default CreateBoardModal;
