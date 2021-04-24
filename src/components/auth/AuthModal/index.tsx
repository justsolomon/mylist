import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useBreakpointValue,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import closePageModal from "../../../utils/ClosePageModal";

interface ModalProps {
  /** Header of the modal */
  header: string;

  /** A Boolean input for determining if it's a login/signup form */
  login?: boolean;

  /** Subheading for auth forms apart from login/signup form */
  subHeading?: string;

  /** Children of input for further custom inputs or input groups */
  children: React.ReactNode;
}

function AuthModal({
  header,
  children,
  login = false,
  subHeading,
}: ModalProps) {
  const history = useHistory();
  const location = useLocation();
  const size = useBreakpointValue(["xs", "md", "lg"]);

  return (
    <Modal
      isOpen
      isCentered
      size={size}
      onClose={() => closePageModal(location, history, "/")}
      scrollBehavior="inside"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{header}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text align={subHeading ? "left" : "center"} mb="4">
            {subHeading ? (
              subHeading
            ) : (
              <>
                {login ? "Don't have an account?" : "Already have an account?"}
                <ChakraLink
                  as={Link}
                  color="blue"
                  ml="1"
                  to={`/${login ? "signup" : "login"}`}
                >
                  {login ? "Sign up" : "Log in"}
                </ChakraLink>
              </>
            )}
          </Text>
          {children}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default AuthModal;
