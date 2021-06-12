import React from "react";
import { Grid } from "@chakra-ui/layout";
import BoardCard from "../BoardCard";

interface CardListProps {
  boards: any[];
}

function BoardCardList({ boards }: CardListProps) {
  return (
    <Grid
      templateColumns={[
        "repeat(2, 1fr)",
        "repeat(3, 1fr)",
        ,
        ,
        "repeat(4, 1fr)",
      ]}
      gap={["2", , "4"]}
    >
      {boards?.map(({ background, title, _id, starred }, index) => (
        <BoardCard
          bg={background}
          title={title}
          key={index}
          id={_id}
          starred={starred}
        />
      ))}
    </Grid>
  );
}

export default BoardCardList;
