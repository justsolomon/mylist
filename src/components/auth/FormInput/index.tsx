import React from "react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Field } from "formik";
import { InputProps } from "../inputInterface";

function FormInput({ label, name, type, id }: InputProps) {
  return (
    <Field name={name}>
      {({ field, form: { touched, errors } }: any) => {
        return (
          <FormControl id={id} isInvalid={errors[name] && touched[name]}>
            <FormLabel fontWeight="medium">{label}</FormLabel>
            <Input type={type} {...field} />
            <FormErrorMessage>{errors[name]}</FormErrorMessage>
          </FormControl>
        );
      }}
    </Field>
  );
}

export default FormInput;
