import React, { useEffect, useState } from "react";
import { Center } from "@chakra-ui/layout";
import { useFormikContext } from "formik";
import Icon from "@chakra-ui/icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

interface BGInputProps {
  /** Background of the input */
  bg: string;

  /** Box size for the input */
  size: string;

  /** Value of the input */
  value: string;
}

function BackgroundInput({ bg, size, value }: BGInputProps) {
  const { values, setFieldValue }: any = useFormikContext();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(values.background === value);
  }, [values]);

  return (
    <Center
      bg={bg}
      bgSize="cover"
      boxSize={size}
      cursor="pointer"
      borderRadius="sm"
      _hover={!checked && { opacity: 0.8 }}
      opacity={checked && 0.7}
      onClick={() => {
        setFieldValue("background", bg);
        setFieldValue("fullBackground", value);
      }}
    >
      {checked && (
        <Icon color="#fff" boxSize="10px">
          <FontAwesomeIcon icon={faCheck} />
        </Icon>
      )}
    </Center>
  );
}

export default BackgroundInput;
