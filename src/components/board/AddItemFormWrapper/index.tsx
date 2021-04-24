import React, { useEffect } from "react";
import { Field, Form, useFormikContext } from "formik";
import { Textarea } from "@chakra-ui/textarea";
import { Input } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";
import { Box, HStack, VStack } from "@chakra-ui/layout";
import { CloseButton } from "@chakra-ui/close-button";

interface AddItemFormWrapperProps {
  /** Boolean to determine whether it's a list or a todo */
  card?: boolean;

  /** To know the visibility status of the form */
  formVisible: boolean;

  /** To set the visibility of the form to hidden */
  hideForm: React.MouseEventHandler;

  /** Loading status of form submission */
  loading: boolean;

  /** Status showing whether item has been created */
  success: boolean;

  children: React.ReactNode;
}

function AddItemFormWrapper({
  card,
  children,
  formVisible,
  loading,
  success,
  hideForm,
}: AddItemFormWrapperProps) {
  const { values, setFieldValue }: any = useFormikContext();

  useEffect(() => {
    if (success) setFieldValue("title", "");
  }, [success]);

  return (
    <Box pr="4" style={{ scrollSnapAlign: "center" }}>
      {!formVisible ? (
        children
      ) : (
        <VStack
          as={Form}
          d="inline-block"
          align="flex-start"
          spacing={card ? "0" : "1"}
          p={!card && "1"}
          minW={card ? "254px" : "270px"}
          bg="#EBECF0"
          borderRadius="4px"
        >
          {card ? (
            <Textarea
              bg="#fff"
              autoFocus
              name="title"
              size="sm"
              maxH="200px"
              border="none"
              borderRadius="3px"
              value={values.title}
              onChange={(e) => setFieldValue("title", e.target.value)}
              placeholder="Enter a title for this card..."
              _focus={{ boxShadow: "none" }}
            />
          ) : (
            <Input
              as={Field}
              autoFocus
              bg="#fff"
              name="title"
              px="3"
              h="36px"
              fontSize="15px"
              borderRadius="2px"
              placeholder="Enter list title..."
            />
          )}
          <HStack>
            <Button
              type="submit"
              fontWeight="normal"
              colorScheme="blue"
              borderRadius="4px"
              size="sm"
              isDisabled={!values.title}
              isLoading={loading}
            >{`Add ${card ? "card" : "list"}`}</Button>
            <CloseButton
              color="gray.500"
              _hover={{ bg: "none", color: "gray.900" }}
              _active={{ bg: "none" }}
              onClick={hideForm}
            />
          </HStack>
        </VStack>
      )}
    </Box>
  );
}

export default AddItemFormWrapper;
