import React, { useRef, useState } from "react";
import { Box } from "@chakra-ui/layout";
import {
  TitleDefaultStyles,
  TitleFocusStyles,
  updateValueIfChanged,
} from "../../../utils/TitleUtils";

export interface TitleProps {
  /** Title of the board/card */
  title: string;

  /** To update the title of the board/card */
  updateTitleValue: (value: string) => void;
}

function BoardTitle({ title, updateTitleValue }: TitleProps) {
  const [focused, setFocused] = useState(false);
  const titleRef = useRef(null);

  return (
    <Box
      as="span"
      d="flex"
      boxSize="32px"
      alignItems="center"
      px="3"
      py="2"
      w="unset"
      maxW="100%"
      ref={titleRef}
      color="gray.100"
      {...TitleDefaultStyles}
      _active={!focused && { bg: "hsla(0, 0%, 100%, .3)" }}
      _hover={!focused && { cursor: "pointer", bg: "hsla(0, 0%, 100%, .2)" }}
      _focus={TitleFocusStyles}
      onFocus={() => setFocused(true)}
      onBlur={() => {
        setFocused(false);
        let newTitle = titleRef.current?.textContent;

        if (newTitle === "") titleRef.current.textContent = title;
        else
          updateValueIfChanged(title, newTitle, () =>
            updateTitleValue(newTitle)
          );
      }}
    >
      {title}
    </Box>
  );
}

export default React.memo(BoardTitle);
