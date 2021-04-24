import React from "react";
import { Input } from "@chakra-ui/input";
import { Field } from "formik";

function BoardTitleInput() {
  return (
    <Input
      as={Field}
      name="title"
      w="85%"
      bg="#ffffff80"
      placeholder="Add board title"
      fontWeight="bold"
      color="#fff"
      borderRadius="sm"
      border="none"
      size="sm"
      fontSize="15px"
      autoComplete="off"
      _placeholder={{ color: "#ffffff90" }}
      _focus={{ border: "none" }}
    />
  );
}

export default BoardTitleInput;
