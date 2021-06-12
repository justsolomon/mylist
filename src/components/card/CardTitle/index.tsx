import React, { useRef } from "react";
import { Box } from "@chakra-ui/layout";
import { TitleProps } from "../../board/BoardTitle";
import {
  TitleDefaultStyles,
  TitleFocusStyles,
  updateValueIfChanged,
} from "../../../utils/TitleUtils";

function CardTitle({ title, updateTitleValue }: TitleProps) {
  const cardTitleRef = useRef(null);

  return (
    <Box
      as="span"
      minW="100%"
      px="1"
      {...TitleDefaultStyles}
      borderRadius="2px"
      fontSize={["19px", "xl"]}
      ref={cardTitleRef}
      _focus={{ ...TitleFocusStyles, bg: "#fff" }}
      onBlur={() => {
        let newTitle = cardTitleRef.current?.textContent;

        //set input to previous board title if user wants to update to empty string
        if (newTitle === "") cardTitleRef.current.textContent = title;
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

export default CardTitle;
