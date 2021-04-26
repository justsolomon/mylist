import React, { useEffect, useRef } from "react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Field } from "formik";
import { InputProps } from "../inputInterface";

function FormInput({ label, name, type, id, focus }: InputProps) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (focus) inputRef.current.focus();
  }, []);

  return (
    <Field name={name}>
      {({ field, form: { touched, errors } }: any) => {
        return (
          <FormControl id={id} isInvalid={errors[name] && touched[name]}>
            <FormLabel fontWeight="medium">{label}</FormLabel>
            <Input type={type} {...field} ref={inputRef} />
            <FormErrorMessage>{errors[name]}</FormErrorMessage>
          </FormControl>
        );
      }}
    </Field>
  );
}

export default FormInput;
