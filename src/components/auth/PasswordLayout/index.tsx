import React, { useEffect, useRef, useState } from "react";
import { IconButton } from "@chakra-ui/button";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { HStack, Link as ChakraLink } from "@chakra-ui/layout";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Field } from "formik";
import { InputProps } from "../inputInterface";
import { Link } from "react-router-dom";

function PasswordLayout({
  label,
  name,
  id,
  forgotPassword,
  focus,
}: InputProps) {
  const [hidden, setHidden] = useState(true);
  const passwordRef = useRef(null);

  useEffect(() => {
    if (focus) passwordRef.current.focus();
  }, []);

  return (
    <Field name={name}>
      {({ field, form: { errors, touched } }: any) => (
        <>
          <FormControl id={id} isInvalid={errors[name] && touched[name]}>
            {forgotPassword ? (
              <HStack align="center" justify="space-between">
                <FormLabel>{label}</FormLabel>
                <ChakraLink
                  as={Link}
                  color="blue"
                  fontSize="sm"
                  fontWeight="medium"
                  to="/forgot-password"
                >
                  Forgot password?
                </ChakraLink>
              </HStack>
            ) : (
              <FormLabel>{label}</FormLabel>
            )}
            <InputGroup>
              <Input
                {...field}
                type={hidden ? "password" : "text"}
                ref={passwordRef}
              />
              <InputRightElement>
                <IconButton
                  aria-label={hidden ? "Show password" : "Hide password"}
                  variant="ghost"
                  icon={<FontAwesomeIcon icon={hidden ? faEye : faEyeSlash} />}
                  onClick={() => setHidden(!hidden)}
                />
              </InputRightElement>
            </InputGroup>

            <FormErrorMessage>{errors[name]}</FormErrorMessage>
          </FormControl>
        </>
      )}
    </Field>
  );
}

export default PasswordLayout;
