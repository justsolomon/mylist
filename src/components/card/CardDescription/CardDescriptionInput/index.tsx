import React, { useState } from "react";
import { Box } from "@chakra-ui/layout";
import {
  TitleDefaultStyles,
  TitleFocusStyles,
} from "../../../../utils/TitleUtils";
import { DescriptionProps } from "../../CardDescription";

const CardDescriptionInput = React.forwardRef<HTMLDivElement, DescriptionProps>(
  ({ description, updateDescOnBlur }, ref) => {
    const [focused, setFocused] = useState(false);

    const hasNoValue = !focused && !description.length;
    return (
      <Box
        as="span"
        w="100%"
        maxW="100%"
        minH="70px"
        px={(focused || hasNoValue) && "3"}
        py={(focused || hasNoValue) && "2"}
        {...TitleDefaultStyles}
        fontWeight="normal"
        fontSize="sm"
        borderRadius="2px"
        whiteSpace="normal"
        ref={ref}
        bg={description.length ? "transparent" : "rgba(0, 0, 0, .05)"}
        _focus={{ ...TitleFocusStyles, bg: "#fff", minH: "120px" }}
        _hover={hasNoValue && { cursor: "pointer", bg: "rgba(0, 0, 0, .1)" }}
        _active={hasNoValue && { bg: "rgba(0, 0, 0, .15)" }}
        onFocus={() => setFocused(true)}
        onBlur={() => {
          setFocused(false);
          updateDescOnBlur();
        }}
      >
        {hasNoValue ? "Add a more detailed description" : description}
      </Box>
    );
  }
);

export default CardDescriptionInput;
