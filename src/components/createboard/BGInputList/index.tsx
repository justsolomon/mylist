import React from "react";
import { Grid } from "@chakra-ui/layout";
import bgColors from "../../../utils/json/bgColors.json";
import BackgroundInput from "../BackgroundInput";
import { RootStateOrAny, useSelector } from "react-redux";

const renderBGInputs = (backgrounds: any, key: string, number: number) => {
  return backgrounds.slice(0, number).map((bg: any, index: number) => {
    const bgValue = `url(${bg["fullImage"]})`;
    const background = key === "imageUrl" ? `url(${bg[key]})` : bg[key];

    return (
      <BackgroundInput
        bg={background}
        size="28px"
        key={index}
        value={key === "imageUrl" ? bgValue : background}
      />
    );
  });
};

function BGInputList() {
  const { images } = useSelector((state: RootStateOrAny) => state.board.index);

  return (
    <Grid templateColumns="repeat(3, 1fr)" gap="1">
      {renderBGInputs(bgColors, "color", 4)}
      {renderBGInputs(images, "imageUrl", 5)}
    </Grid>
  );
}

export default BGInputList;
